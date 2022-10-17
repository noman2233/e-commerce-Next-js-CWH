
import User from "../../models/User"
import dbConnect from "../../middlewear/db"
// const { body, validationResult } = require('express-validator');
import bcryptjs from "bcryptjs"


export default async function handler (req, res){

    const {method}=req
    dbConnect()
    if(method==='POST'){

   const { password, email } = User
   try {
    let user = await User.findOne({ email: email })

    if (user) {
      return res.status(409).send("Email already exists")
    }

    let salt = await bcryptjs.genSalt(10)
    let hashedPassword = await bcryptjs.hashSync(req.body.password, salt)

    let newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      // password:req.body.password
      password: hashedPassword,
    })
    res.status(200).json({ status: "User is created", newUser })

  } catch (error) {
    res.status(500).json({ status: "server error", message: error.message })
  }
        //   return res.status(200).json({ message: "success",savedUser });
        
            
    }else{
        res.status(424).json({status:"Product not added"})    
    } 
    
    

    }
    



  
  

  