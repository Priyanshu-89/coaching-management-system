import mongoose from "mongoose"

export async function connectDb(){
    try {
        const client=await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to mongodb")
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDb