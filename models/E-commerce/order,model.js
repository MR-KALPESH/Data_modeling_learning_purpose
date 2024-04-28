import mongoose from "mongoose";
import { product } from "./product.model";

const orderitemsSchema = mongoose.Schema({
    productId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product'
    },
    quanitiy :{
        type : Number,
        required : true
    }
})

const orderSchema = new mongoose.Schema({
    orderprice:{
        type : Number,
        required : true
    },
    customer :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    orderitems :{
        type : [orderitemsSchema]
    },
    status :{
        type : String,
        enum : ["PENDING" , "CANCELLED" , "DELIVERD"],
        default : "PENDING"
    }
},{timestamps:true})

export const order = mongoose.model("order", orderSchema)