import Category from "@/app/models/Category";
import connectDb from "@/app/utils/ConnectDb";
import mongoose from "mongoose";


export async function main(){
    try {
        await connectDb()
        await Category.insertMany([
            {name:"Development", description:"Development for indursties"},
            {name:"Cloud Computing", description:"Learn scalable storage and computing solutions."},
            {name:"Data Structures & Algorithms",description:"Strengthen logic with efficient coding techniques."},
            {name:"Software Engineering", description:"Design, develop, and manage software projects."}
        ])
        console.log("Inserted Seed")
    } catch (error) {
        console.log("Error seeding the database category model")
    } finally{
        mongoose.connection.close();
    }
}

