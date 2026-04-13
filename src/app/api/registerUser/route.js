import customerModel from "@/models/customer.model";
import mongoose from "mongoose";
export default async function POST(req){

        
        if(mongoose.connection.readyState !== 1){
            await mongoose.connect(process.env.MONGODB_URI, {servertimeoutms: 5000});
        }

    


}