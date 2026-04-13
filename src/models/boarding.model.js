import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI)
const boardingSchema = new mongoose.Schema({
    start:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
    }
)

export default mongoose.models.boarding || mongoose.model('boarding', boardingSchema)