import Course from "@/app/models/CourseModel";
import connectDb from "@/app/utils/ConnectDb"
import { NextResponse } from "next/server";

export const PATCH=async(req, {params})=>{
    await connectDb();
    let {courseId}=params;
    try {
        let course=await Course.findByIdAndUpdate(courseId, {status:"Published"})
        return NextResponse.json(course)
    } catch (error) {
        console.log("COURSE PUBLISH ERROR", error)
        return new NextResponse("Something went wrong", {status:500})
    }
}