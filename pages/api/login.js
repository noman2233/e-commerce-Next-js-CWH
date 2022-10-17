
import User from "../../models/User"
import dbConnect from "../../middlewear/db"
// const { body, validationResult } = require('express-validator');
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import cookie  from 'cookie-parser'



export default async function handler (req, res){

    const {method}=req
    dbConnect()
    if(method==='POST'){

   const { password, email } = User
   try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }
    let comparePassword = await bcryptjs.compare(password, user.password)
    if (!comparePassword) {
      return res.status(400).json("Incorrect Login credentials")
    }

    let data = {
      user: {
        id: user.id
      }
    }
    let token = await jwt.sign({ data, isAdmin: user.isAdmin }, process.env.SECRET_KEY)
  
    res.cookie("access_token", token, {
      expires: new Date(Date.now() + 2589000),
      httpOnly: true
  });
  res.status(201).json({user,token});
  } catch (error) {
    res.status(500).json({ status: "server error", message: error.message })
  }
        
            
    }else{
        res.status(424).json({status:"Product not added"})    
    } 
    
    

    }
    



  
  

  