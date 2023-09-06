const fileUpload = require("express-fileupload");
require("dotenv").config();
const Product = require("../models/products");
const Category = require("../models/category");
const SpecialCategory = require("../models/specialCategory");
const blobServiceClient = require("../azure/azureStorage");
const { BadRequestError, NotFoundError } = require("../errors");
const mongoose = require("mongoose");

const createProduct = async (req, res) => {
    // return res.json({a:req.body,b:req.files});

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No images uploaded." });
    }

    const nameExist = await Product.findOne({ name: req.body.name });
    if (nameExist) {
        throw new BadRequestError("Product name already exist");
    }

    // if (req.body.categories.length > 0) {
    //     const validCategoryIds = req.body.categories.filter((id) =>
    //         mongoose.isValidObjectId(id)
    //     );

    //     if (validCategoryIds.length !== req.body.categories.length) {
    //         throw new BadRequestError("Invalid Special Category Ids");
    //     }

    //     const categories = await Category.find({
    //         _id: { $in: validCategoryIds },
    //     });

    //     if (categories.length !== validCategoryIds.length) {
    //         throw new BadRequestError("Special Category does not exist");
    //     }

    //     req.body.categories = categories.map((category) => category._id);
    // }

    // Push Images to Azure Blob Storage
    const imagePromises = req.files.map(async (image) => {
        // Get the file extension (assuming image files)
        const fileExtension = image.originalname.split(".").pop();
        const blobName = `${Date.now()}-${Math.random()
            .toString(36)
            .substring(7)}.${fileExtension}`;

        const containerName = process.env.ASIS_IMAGE_CONTAINER_NAME;
        const containerClient =
            blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.upload(image.buffer, image.buffer.length);
        // return `${process.env.AZURE_IMAGE_URL}${blobName}`;
        return blobName;
    });
    const images = await Promise.all(imagePromises);
    req.body.images = images;

    const product = await Product.create(req.body);

    res.status(201).json({
        message: "Product created successfully",
        product,
    });
};

const getProducts = async (req, res) => {
    // get name query from request
    const { name, category, categories, gender, collaborations } = req.query;

    // create a query object to filter result and for search attribute add admin to it
    const queryObject = {};

    // if name is provided in request query add to query object
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    // If categories is provided in request query add to query object
    if (categories) {
        queryObject.categories = categories;
    }
    // If gender is provided in request query add to query object
    if (gender) {
        queryObject.gender = gender;
    }
    // If collaborations is provided in request query add to query object
    if (collaborations) {
        queryObject.collaborations = collaborations;
    }

    // get products for admin
    let result = Product.find(queryObject)
        .populate("categories")
        .select("-admin -createdAt -updatedAt -__v");

    // #################################################################
    // Set up Pagination

    // set limit and page(from query) variable
    const limit = Number(req.query.limit) || 30;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;

    // edit products based on limit and page
    result = result.skip(skip).limit(limit);

    // #################################################################
    // Send final products

    const products = await result;

    res.json({ nbHits: products.length, products });
};

const getProductById = async (req, res) => {
    // get product id from request params
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.isValidObjectId(id)) {
        throw new BadRequestError("Invalid product id");
    }

    // get product by id
    const product = await Product.findById(id)
        .populate("categories")
        .select("-admin -createdAt -updatedAt -__v");

    // if product not found throw error
    if (!product) {
        throw new NotFoundError("Product not found");
    }

    // send product
    res.json(product);
};

const deleteProduct = async (req, res) => {
    // get product id from request params
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.isValidObjectId(id)) {
        throw new BadRequestError("Invalid product id");
    }

    // find product by id and delete
    const product = await Product.findById(id);

    // if product not found throw error
    if (!product) {
        throw new NotFoundError("Product not found");
    }

    // Delete images from azure blob storage
    const containerName = process.env.ASIS_IMAGE_CONTAINER_NAME;
    const imagePromises = product.images.map(async (imageName) => {
        const containerClient =
            blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(imageName);
        await blockBlobClient.deleteIfExists();
        // return;
    });

    await Promise.all(imagePromises);

    await Product.findByIdAndDelete(id);
    // send success message
    res.json({ message: "Product deleted successfully" });
};

const deleteProductImage = async (req, res) => {
    // get product id and image id from request params
    const { productId } = req.params;

    // get image name from request body
    const { imageNames } = req.body;
    console.log(req.body);

    // check if product id is valid
    if (!mongoose.isValidObjectId(productId)) {
        throw new BadRequestError("Invalid product id");
    }

    // get product by id
    const product = await Product.findById(productId);

    // if product not found throw error
    if (!product) {
        throw new NotFoundError("Product not found");
    }

    const imagePromises = imageNames.map(async (imageName) => {
        // check if image exists in product images
        if (!product.images.includes(imageName)) {
            throw new NotFoundError("Image not found in product images");
        }
        try {
            // Delete image from azure blob storage
            const containerName = process.env.ASIS_IMAGE_CONTAINER_NAME;
            const containerClient =
                blobServiceClient.getContainerClient(containerName);
            const blockBlobClient =
                containerClient.getBlockBlobClient(imageName);

            await blockBlobClient.deleteIfExists();
            const images = product.images.filter(
                (image) => image !== imageName
            );
            product.images = images;
            // return imageName;
        } catch (error) {
            console.log(error.details);
            // if (error.details.code === "BlobNotFound") {
            //     throw new NotFoundError("Image not found");
            // }
            throw new BadRequestError("Error deleting image");
        }
    });

    await Promise.all(imagePromises);
    console.log(product.images);
    // imagesToDelete.forEach((imageName) => {
    //     const images = product.images.filter((image) => image !== imageName);
    //     product.images = images;
    // });
    // save product
    await product.save();

    // send success message
    res.json({ message: "Image deleted successfully" });
};

const addProductImage = async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No images uploaded." });
    }
    // get product id and image id from request params
    const { productId, imageName } = req.params;

    // check if product id is valid
    if (!mongoose.isValidObjectId(productId)) {
        throw new BadRequestError("Invalid product id");
    }

    // get product by id
    const product = await Product.findById(productId);

    // if product not found throw error
    if (!product) {
        throw new NotFoundError("Product not found");
    }

    // Push Images to Azure Blob Storage
    const imagePromises = req.files.map(async (image) => {
        // Get the file extension (assuming image files)
        const fileExtension = image.originalname.split(".").pop();
        const blobName = `${Date.now()}-${Math.random()
            .toString(36)
            .substring(7)}.${fileExtension}`;

        const containerName = process.env.ASIS_IMAGE_CONTAINER_NAME;
        const containerClient =
            blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.upload(image.buffer, image.buffer.length);
        // return `${process.env.AZURE_IMAGE_URL}${blobName}`;
        return blobName;
    });
    const images = await Promise.all(imagePromises);
    product.images = [...product.images, ...images];

    // save product
    await product.save();

    // send success message
    res.json({ message: "Image added successfully", images });
};

const updateProduct = async (req, res) => {
    // get product id from request params
    const { id } = req.params;

    if (req.body.images) {
        throw new BadRequestError("Images cannot be updated from this route");
    }

    // check if id is valid
    if (!mongoose.isValidObjectId(id)) {
        throw new BadRequestError("Invalid product id");
    }

    // find product by id and delete
    const product = await Product.findById(id);

    // if product not found throw error
    if (!product) {
        throw new NotFoundError("Product not found");
    }

    if (req.body.name) {
        const nameExist = await Product.findOne({
            name: req.body.name,
        });

        if (nameExist?._id?.toString() !== id && nameExist) {
            throw new BadRequestError("Name already exists");
        }
    }
    // if(req.)

    // if (req.body.categories.length > 0) {
    //     const validCategoryIds = req.body.categories.filter((id) =>
    //         mongoose.isValidObjectId(id)
    //     );

    //     if (validCategoryIds.length !== req.body.categories.length) {
    //         throw new BadRequestError("Invalid Special Category Ids");
    //     }

    //     const categories = await Category.find({
    //         _id: { $in: validCategoryIds },
    //     });

    //     if (categories.length !== validCategoryIds.length) {
    //         throw new BadRequestError("Special Category does not exist");
    //     }

    //     req.body.categories = categories.map((category) => category._id);
    // }

    const newProductInfo = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        message: "Product updated successfully",
        product: newProductInfo,
    });
};

const createSpecialCategory = async (req, res) => {
    // if (!req.body.name) {
    //     throw new BadRequestError("Name is required");
    // }

    // return res.json({a:req.body,b:req.files});

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No images uploaded." });
    }

    const nameExist = await Category.findOne({ name: req.body.name });
    if (nameExist) {
        throw new BadRequestError("Category name already exist");
    }

    // Push Images to Azure Blob Storage
    const imagePromises = req.files.map(async (image) => {
        // Get the file extension (assuming image files)
        const fileExtension = image.originalname.split(".").pop();
        const blobName = `${Date.now()}-${Math.random()
            .toString(36)
            .substring(7)}.${fileExtension}`;

        const containerName = process.env.ASIS_IMAGE_CONTAINER_NAME;
        const containerClient =
            blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.upload(image.buffer, image.buffer.length);
        // return `${process.env.AZURE_IMAGE_URL}${blobName}`;
        return blobName;
    });
    const images = await Promise.all(imagePromises);
    req.body.images = images;

    const category = await Category.create(req.body);

    res.status(201).json({
        message: "Category created successfully",
        category,
    });
};

const getCategories = async (req, res) => {
    // get name query from request
    const { name } = req.query;

    // create a query object to filter result and for search attribute add admin to it
    const queryObject = {};

    // if name is provided in request query add to query object
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    // get categories for admin
    let result = Category.find(queryObject).select(
        "-admin -createdAt -updatedAt -__v"
    );

    // #################################################################
    // Set up Pagination

    // set limit and page(from query) variable
    const limit = Number(req.query.limit) || 30;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;

    // edit categories based on limit and page
    result = result.skip(skip).limit(limit);

    // #################################################################
    // Send final categories

    const categories = await result;

    res.json({ nbHits: categories.length, categories });
};

const getCategoryById = async (req, res) => {
    // get product id from request params
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.isValidObjectId(id)) {
        throw new BadRequestError("Invalid category id");
    }

    // get product by id
    const category = await Category.findById(id).select(
        "-admin -createdAt -updatedAt -__v"
    );

    // if product not found throw error
    if (!category) {
        throw new NotFoundError("category not found");
    }

    // send product
    res.json(category);
};

const deleteCategory = async (req, res) => {
    // get category id from request params
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.isValidObjectId(id)) {
        throw new BadRequestError("Invalid category id");
    }

    // find category by id and delete
    const category = await Category.findById(id);

    // if category not found throw error
    if (!category) {
        throw new NotFoundError("Category not found");
    }

    // Delete images from azure blob storage
    const containerName = process.env.ASIS_IMAGE_CONTAINER_NAME;
    const imagePromises = category.images.map(async (imageName) => {
        const containerClient =
            blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(imageName);
        await blockBlobClient.deleteIfExists();
        // return;
    });

    await Promise.all(imagePromises);

    await Category.findByIdAndDelete(id);
    // send success message
    res.json({ message: "Category deleted successfully" });
};

const updateCategory = async (req, res) => {
    // get category id from request params
    const { id } = req.params;

    if (req.body.images) {
        throw new BadRequestError("Images cannot be updated from this route");
    }

    // check if id is valid
    if (!mongoose.isValidObjectId(id)) {
        throw new BadRequestError("Invalid category id");
    }

    // find category by id and delete
    const category = await Category.findById(id);

    // if category not found throw error
    if (!category) {
        throw new NotFoundError("Category not found");
    }

    if (req.body.name) {
        const nameExist = await Category.findOne({
            name: req.body.name,
        });

        if (nameExist?._id?.toString() !== id && nameExist) {
            throw new BadRequestError("Name already exists");
        }
    }

    const newProductInfo = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        message: "Category updated successfully",
        category: newProductInfo,
    });
};

const deleteCategoryImage = async (req, res) => {
    // get category id and image id from request params
    const { categoryId } = req.params;

    // get image name from request body
    const { imageNames } = req.body;

    // check if category id is valid
    if (!mongoose.isValidObjectId(categoryId)) {
        throw new BadRequestError("Invalid category id");
    }

    // get category by id
    const category = await Category.findById(categoryId);

    // if category not found throw error
    if (!category) {
        throw new NotFoundError("Category not found");
    }

    const imagePromises = imageNames.map(async (imageName) => {
        // check if image exists in category images
        if (!category.images.includes(imageName)) {
            throw new NotFoundError("Image not found in category images");
        }
        try {
            // Delete image from azure blob storage
            const containerName = process.env.ASIS_IMAGE_CONTAINER_NAME;
            const containerClient =
                blobServiceClient.getContainerClient(containerName);
            const blockBlobClient =
                containerClient.getBlockBlobClient(imageName);

            await blockBlobClient.deleteIfExists();
            const images = category.images.filter(
                (image) => image !== imageName
            );
            category.images = images;
            // return imageName;
        } catch (error) {
            console.log(error.details);
            // if (error.details.code === "BlobNotFound") {
            //     throw new NotFoundError("Image not found");
            // }
            throw new BadRequestError("Error deleting image");
        }
    });

    await Promise.all(imagePromises);
    console.log(category.images);
    // imagesToDelete.forEach((imageName) => {
    //     const images = category.images.filter((image) => image !== imageName);
    //     category.images = images;
    // });
    // save category
    await category.save();

    // send success message
    res.json({ message: "Image deleted successfully" });
};

const addCategoryImage = async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No images uploaded." });
    }
    // get category id and image id from request params
    const { categoryId, imageName } = req.params;

    // check if category id is valid
    if (!mongoose.isValidObjectId(categoryId)) {
        throw new BadRequestError("Invalid category id");
    }

    // get category by id
    const category = await Category.findById(categoryId);

    // if category not found throw error
    if (!category) {
        throw new NotFoundError("Category not found");
    }

    // Push Images to Azure Blob Storage
    const imagePromises = req.files.map(async (image) => {
        // Get the file extension (assuming image files)
        const fileExtension = image.originalname.split(".").pop();
        const blobName = `${Date.now()}-${Math.random()
            .toString(36)
            .substring(7)}.${fileExtension}`;

        const containerName = process.env.ASIS_IMAGE_CONTAINER_NAME;
        const containerClient =
            blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.upload(image.buffer, image.buffer.length);
        // return `${process.env.AZURE_IMAGE_URL}${blobName}`;
        return blobName;
    });
    const images = await Promise.all(imagePromises);
    category.images = [...category.images, ...images];

    // save category
    await category.save();

    // send success message
    res.json({ message: "Image added successfully", images });
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    deleteProductImage,
    addProductImage,
    createSpecialCategory,
    getCategories,
    getCategoryById,
    deleteCategory,
    updateCategory,
    deleteCategoryImage,
    addCategoryImage,
};
