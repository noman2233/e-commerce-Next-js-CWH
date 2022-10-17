import mongoose from "mongoose"

// const connectDB=handler=>async (req,res)=>{
//     if(mongoose.connections[0].readyState){
//         return handler(req,res)
//     }

//     await mongoose.connect(process.env.MONGNODB_URL)
//     return handler (req,res)
// }
// export default connectDB



const MONGNODB_URL=process.env.MONGNODB_URL

if(!MONGNODB_URL){
    throw new Error(
        "Please define mongo URI inside .env.local"   )
}
let cashed=global.momgoose

if(!cashed){
    cashed=global.mongoose={conn:null,promise:null}
}

async function connectDB(){
    if(cashed.conn){
        return cashed.conn}
    
    if(!cashed.promise){
    const opts={
        bufferCommands:false
    }
    
    
    cashed.promise= await mongoose.connect(MONGNODB_URL,opts).then((mongoose)=>{
        return mongoose
})
    
}
cashed.conn=await cashed.promise
return cashed.conn
}

export default connectDB



