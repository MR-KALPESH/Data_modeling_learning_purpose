import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    discreption :{
        typeof : String,
        required: true
    },
    name:{
        typeof : String,
        required :true
    },
    productImage : {
        type : String ,
    },
    price:{
        type : Number,
        default : 0
    },
    stock:{
        type : Number,
        default : 0
    },
    category:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category',
        required : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
},{timestamps:true})

export const product = mongoose.model("product", productSchema)