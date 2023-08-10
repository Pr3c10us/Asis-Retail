const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        specialCategory: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SpecialCategory",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model(
    "Category",
    categorySchema
);

module.exports = Category;
