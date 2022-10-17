// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Product from "../../models/Products"
import dbConnect from "../../middlewear/db"


export default async function handler (req, res){

    const {method}=req
    dbConnect()
    if(method==='POST'){
   
        let product=await new Product(req.body)
        let savedProduct=await product.save()
        return res.status(200).json({ message: "success",savedProduct });
        
            
    }else{
        res.status(424).json({status:"Product not added"})    
    } 
    
    

    }
    



  
  

  