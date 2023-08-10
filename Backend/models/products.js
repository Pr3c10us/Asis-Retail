const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        description: {
            type: String,
        },
        gender: {
            type: String,
            enum: ["male", "female", "unisex"],
            default: "unisex",
        },
        images: [
            {
                type: String,
            },
        ],
        categories: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Category",
            },
        ],
        countInStock: [
            {
                option: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 0,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

// Demo 2: Create a product
const ProductDemo = {
    name: "Nike Slim Shirt",
    price: 12000,
    description: "A very nice shirt",
    category: "Shirts",
    countInStock: 10,
};
