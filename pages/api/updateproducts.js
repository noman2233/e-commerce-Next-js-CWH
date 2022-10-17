import Product from "../../models/Products"
import dbConnect from "../../middlewear/db"


export default async function handler (req, res){

    const {method,query:{id}}=req
    dbConnect()
if(method==='POST'){
    let updatedProduct=await Product.findByIdAndUpdate(req.body._id,req.body)
    res.status(200).json({ status: "product updated successfully", updatedProduct });
    
}else{
    
    res.status(400).json({status:"Product has not been updated"})    
}
}


