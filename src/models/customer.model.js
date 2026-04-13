import mongoose from 'mongoose';


mongoose.connect(process.env.MONGODB_URI)

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
    ,
    password:{
        type:String,
        required:true
    }
})


export default mongoose.models.customer || mongoose.model('customer', customerSchema)