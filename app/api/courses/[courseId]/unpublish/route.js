import Course from "@/app/models/CourseModel";
import connectDb from "@/app/utils/ConnectDb"
import { NextResponse } from "next/server";

export const PATCH=async (req, {params})=>{
    await connectDb();
    let {courseId}=await params;

    try {
        let course=await Course.findByIdAndUpdate(courseId, {status:"Draft"})
        return NextResponse.json(course)
    } catch (error) {
       console.log("COURSE DRAFT ERROR", error)
       return new NextResponse("something went wrong", {status:500}) 
    }
}