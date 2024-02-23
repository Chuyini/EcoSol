import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            maxlenght: [100, "Name can not exceed 100 characters"],
            minlenght: [1, "Name must be at least 1 characters long"]
        },
        firstLastName: {
            type: String,
            required: [true, "First Last Name is required"],
            trim: true,
            maxlenght: [100, "First Last Name can not exceed 100 characters"],
            minlenght: [1, "First Last Name must be at least 1 characters long"]
        },
        secondLastName: {
            type: String,
            required: [true, "Second Last Name is required"],
            trim: true,
            maxlenght: [100, "Second Last Name can not exceed 100 characters"],
            minlenght: [1, "Second Last Name must be at least 1 characters long"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            maxlenght: [100, "Email can not exceed 100 characters"],
            minlenght: [1, "Email must be at least 1 characters long"],
            match: [
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Please fill a valid email address"
            ]
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        }, 
        phone: {
            type: Number,
            required: [true, "Phone is required"],
            unique: true,
            trim: true,
            maxlenght: [10, "Phone can not exceed 10 characters"],
            minlenght: [10, "Phone must be at least 10 characters long"]
        },
        postalCode: {
            type: Number,
            required: [false],
            trim: true,
            maxlenght: [5, "Postal Code can not exceed 5 characters"],
        },    
        address: {
            type: String,
            required: [false],
            trim: true,
            maxlenght: [100, "Address can not exceed 100 characters"],
        },
        role: {
            type: String,
            required: [true, "Role is required"],
            trim: true,
            enum: ["admin", "user", "coordinator"],
        },
        status:{
            type: String,
            required: [true, "Status is required"],
            trim: true,
            enum: ["active", "inactive", "test"],
        },
        visibility:{
            type: Boolean,
            required: [true, "Visibility is required"],
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default models.User || model("User", userSchema);