import {Schema, model, models} from "mongoose";

const productSchema = new Schema({
        name: {
            type: String,
            required: [true, "Product Name is required"],
            trim: true,
            maxlenght: [20, "Product name can not exceed 20 characters"],
            minlenght: [1, "Product name must be at least 1 characters long"]
        },
        descritpion: {
            type: String,
            required: [true, "Description is required"],
            maxlenght: [100, "Description Name can not exceed 100 characters"],
            minlenght: [1, "Description Name must be at least 1 characters long"]
        },
        transactionType: {
            type: String,
            required: [true, "Transaction type is required"],
            trim: true,
            enum: ["sale", "exchange", "donation"]
        },
        image: {
            type: String,
            required: [true, "Image URL is required"],
            trim: true,
        },
        available: {
            type: Boolean,
            required: [true, "Available is required"]
        },
        category: {
            type: String,
            required: [true, "Category is required"],
            trim: true,
            maxlenght: [100, "Category can not exceed 100 characters"],
            minlenght: [1, "Category must be at least 1 characters long"]
        },
        price: {
            type: Number,
            required: [false]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default models.Product || model("Product", productSchema);