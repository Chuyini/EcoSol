import {Schema, model, models} from "mongoose";

const categorySchema = new Schema({
        name: {
            type: String,
            required: [true, "Category Name is required"],
            trim: true,
            maxlenght: [50, "Category name can not exceed 50 characters"],
            minlenght: [1, "Category name must be at least 1 characters long"]
        },
        descritpion: {
            type: String,
            required: [false],
            maxlenght: [100, "Description Name can not exceed 100 characters"],
            minlenght: [1, "Description Name must be at least 1 characters long"]
        },
        status: {
            type: Boolean,
            required: [true, "Status is required"]
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default models.Category || model("Category", categorySchema);