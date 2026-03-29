import mongoose from 'mongoose';

const boardingSchema = new mongoose.Schema({
    start:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },

    }
)

export default mongoose.models.boarding || mongoose.model('boarding', boardingSchema)