const { BadRequestError } = require("../errors/index.js");
const Cart = require("../models/carts.js");
const Product = require("../models/products.js");
const mongoose = require("mongoose");

const editCart = async (req, res) => {
    const { productId, option, quantity } = req.body;
    if (!productId || !option || !quantity) {
        throw new BadRequestError("Please fill all the fields");
    }

    if (!mongoose.isValidObjectId(productId)) {
        throw new BadRequestError("Product Id is not valid");
    }

    const product = await Product.findById(productId);
    if (!product) {
        throw new BadRequestError("Product doesn't exist");
    }

    // check if option with quantity is available
    const optionExist = product.countInStock.find(
        (item) => item.option === option && item.quantity >= quantity
    );
    if (!optionExist) {
        throw new BadRequestError(
            `quantity of option ${option} in stock is less than ${quantity}`
        );
    }

    const cartId = req.cart;

    if (!cartId) {
        const cart = new Cart({
            products: [
                {
                    product,
                    option,
                    quantity,
                    price: product.price,
                    totalPrice: product.price * quantity,
                },
            ],
            totalPrice: product.price * quantity,
        });
        await cart.save();
        return res
            .status(201)
            .cookie("cart", cart._id, {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                httpOnly: true,
                signed: true,
            })
            .json({
                msg: "Product added to cart",
                cart
            });
    } else {
        const cart = await Cart.findById(cartId);
        const productExist = cart.products.find(
            (item) =>
                item.product.toString() === product._id.toString() &&
                item.option === option
        );

        if (productExist) {
            // if (productExist.quantity + quantity > optionExist.quantity) {
            //     throw new BadRequestError(
            //         `quantity of option ${option} in stock is less than ${quantity}`
            //     );
            // }
            // productExist.quantity += quantity;
            // productExist.totalPrice += product.price * quantity;
            productExist.quantity = quantity;
            productExist.totalPrice = product.price * quantity;
            // cart.totalPrice += product.price * quantity;
        } else {
            cart.products.push({
                product,
                option,
                quantity,
                price: product.price,
                totalPrice: product.price * quantity,
            });
            // cart.totalPrice += product.price * quantity;
        }

        cart.totalPrice = cart.products.reduce(
            (acc, item) => acc + item.totalPrice,
            0
        );
        await cart.save();
        return res.status(201).json({
            msg: "Product added to cart",
            cart
        });
    }
};

const getCart = async (req, res) => {
    const cartId = req.cart;
    if (!cartId) {
        return res.status(200).json({
            products: [],
            totalPrice: 0,
        });
    }

    const cart = await Cart.findById(cartId).populate(
        "products.product",
        "name price images"
    );

    res.status(200).json(cart);
};

const removeItem = async (req, res) => {
    const cartId = req.cart;

    if (!cartId) {
        throw new BadRequestError("Cart doesn't exist");
    }

    const { productId, option } = req.body;

    if (!productId || !option) {
        throw new BadRequestError("Please fill all the fields");
    }
    if (!mongoose.isValidObjectId(productId)) {
        throw new BadRequestError("Product Id is not valid");
    }

    const cart = await Cart.findById(cartId);

    if (!cart) {
        throw new BadRequestError("Cart doesn't exist");
    }

    const productExist = cart.products.find(
        (item) =>
            item.product.toString() === productId.toString() &&
            item.option === option
    );

    if (!productExist) {
        throw new BadRequestError("Product doesn't exist in cart");
    }

    cart.products = cart.products.filter(
        (item) =>
            item.product.toString() !== productId.toString() ||
            item.option !== option
    );

    cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.totalPrice,
        0
    );

    await cart.save();

    res.status(200).json({
        msg: "Product removed from cart",
    });
};

const clearCart = async (req, res) => {
    const cartId = req.cart;
    if (!cartId) {
        return res.status(200).json({
            msg: "Cart is already empty",
        });
    }
    await Cart.findByIdAndDelete(cartId);
    res.status(200)
        .cookie("cart", "", {
            expires: new Date(Date.now() + 1000),
        })
        .json({
            msg: "Cart is cleared",
        });
};

module.exports = {
    getCart,
    editCart,
    removeItem,
    clearCart,
};
