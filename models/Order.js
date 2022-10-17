import mongoose from "mongoose"

const ordersSchema=new mongoose.Schema({
    userId:{
        type:string,
        required:true
    },
    products:[
    {
        productId:{
            type:String
        },
        quantity:{
            type:Number,
            deafult:1
        }

    }
    ],
    address:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
    required:true,

    },
    status:String,
    deafult:"pending",
    required:true

},{timestamps:true})

export default mongoose.models?.Order || mongoose.model('Order', ordersSchema);

