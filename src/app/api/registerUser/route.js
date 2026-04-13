import customerModel from "@/models/customer.model";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export async function POST(req) {

    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 })
        }
        const body = await req.json()

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(body.password, saltRounds);
        
        body.password = hashedPassword;
        
        const newCustomer = new customerModel(body)

        await newCustomer.save()

        return Response.json({ message: "User Registered Successfully", data: newCustomer }, { status: 201 })
    }
    catch (error) {
        return Response.json({ message: error.message }, { status: 400 })
    }


}