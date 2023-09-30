const mongoose = require("mongoose");

const specialCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const SpecialCategory = mongoose.model(
    "SpecialCategory",
    specialCategorySchema
);

module.exports = SpecialCategory;
