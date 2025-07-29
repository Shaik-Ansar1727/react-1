import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    username:String,
    password:String
});

export const User = mongoose.model("User",userScheme);