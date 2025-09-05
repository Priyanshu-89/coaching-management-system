import User from "@/app/models/UserModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import connectDb from "@/app/utils/ConnectDb";

export async function POST(req) {
    try {
        await connectDb()
        const {name, email, password} = await req.json();
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({
                status: 400,
                message: "Email already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ name, email, password: hashedPassword })
   
        return NextResponse.json({ message: "Register success" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}