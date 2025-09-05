import Course from "@/app/models/CourseModel";
import connectDb from "@/app/utils/ConnectDb"
import { NextResponse } from "next/server";

export const PATCH = async (req, {params}) => {
    try {
        await connectDb()
         let {courseId} =await params;
        let values=await req.json();
       
        let course=await Course.findByIdAndUpdate(courseId, {...values})
        return NextResponse.json(course)

    } catch (error) {
        console.log("Course Update Error", error)
        return new NextResponse("Internal Error", {status:500})
    }
}

export const DELETE=async(req, {params})=>{
    try {
        await connectDb();
        let {courseId} =params;
        let course=await Course.findByIdAndDelete(courseId)

        return NextResponse.json(course)
    } catch (error) {
        console.log("[COURSE DELETE] ERROR ", error)
        return new NextResponse("Internal Error", {status:500})
    }
}