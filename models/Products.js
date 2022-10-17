import mongoose from "mongoose"

const productSchema=new mongoose.Schema({
   title:{
    type:String,
    required:true,
   },
   cat:{
    type:String,
    required:true
   },  
     price:{
    type:Number,
    required:true
   }, 
   
   desc:{
    type:String,
    required:true
   },
   img:{
    type:[String],
    requiredd:true
   },
   avalaibleQuantity:{
    type:Number,
    required:true
   },
   

},{timestamps:true})

export default mongoose.models?.Product || mongoose.model('Product', productSchema);

