import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        },     
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default models.User || model("User", userSchema);