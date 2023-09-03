const router = require("express").Router();
const multer = require("multer");
const upload = multer();
const { adminAuthorization } = require("../middleware/adminAuthorization");

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    deleteProductImage,
    addProductImage,
    createSpecialCategory,
    getCategories,
    deleteCategory,
    updateCategory,
    addCategoryImage,
    deleteCategoryImage,
} = require("../controller/products");
const convertToArray = require("../middleware/convertTOArray");

router
    .route("/")
    .get(getProducts)
    .post(
        adminAuthorization,
        upload.array("images"),
        convertToArray("categories"),
        convertToArray("collaborations"),
        createProduct
    );

router
    .route("/:productId/image")
    .put(adminAuthorization, upload.array("images"), addProductImage)
    .delete(adminAuthorization, deleteProductImage);

router
    .route("/category")
    .get(getCategories)
    .post(adminAuthorization, upload.array("images"), createSpecialCategory);

router
    .route("/category/:categoryId/image")
    .put(adminAuthorization, upload.array("images"), addCategoryImage)
    .delete(adminAuthorization, deleteCategoryImage);

router
    .route("/category/:id")
    .put(adminAuthorization, updateCategory)
    .delete(adminAuthorization, deleteCategory);

router
    .route("/:id")
    .get(getProductById)
    .put(adminAuthorization, updateProduct)
    .delete(adminAuthorization, deleteProduct);

module.exports = router;
