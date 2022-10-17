import Product from "../../../models/Products"
import dbConnect from "../../../middlewear/db"


export default async function handler (req, res){

    const {method,query:{id}}=req
    dbConnect()
if(method==='GET'){
    let product=await Product.findById(id)
    res.status(200).json({ status: "Specific product is here", product });
    
}else{
    
    res.status(400).json({status:"Specific Product not found"})    
}
}


