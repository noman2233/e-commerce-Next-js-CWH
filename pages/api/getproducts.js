import Products from "../../models/Products"
import dbConnect from "../../middlewear/db"


export default async function handler (req, res){

    dbConnect()
    const {method}=req
    if(method==='GET'){
        try {
            
            let products= await Products.find()
            res.status(200).json(products)
            
        } catch (error) {    
        res.status(500).json({status:"Internal server error", message:error.message})
    }
    
}else{
    res.status(500).json({status:"No products found"})
    
    }


    // if(method==='POST'){
   
    //     let product=await new Product(req.body)
    //     let savedProduct=await product.save()
    //     return res.status(200).json({ message: "success",savedProduct });
        
            
    // }else{
    //     res.status(424).json({status:"Product not added"})    
    // } 

  }
  


