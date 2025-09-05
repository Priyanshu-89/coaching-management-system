import Course from "@/app/models/CourseModel";
import connectDb from "@/app/utils/ConnectDb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function POST(req){
    await connectDb();
    // const {title}=await req.json()
     const body = await req.json();
    const { title } = body;
try {
        const course=await Course.create({title})
        return NextResponse.json(course)
} catch (error) {
    return new NextResponse("Internal Error", {status:500})
}
}