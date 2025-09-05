"use server"

import { redirect } from "next/navigation"
import User from "./models/UserModel"
import connectDb from "./utils/ConnectDb"
import Category from "./models/Category"

import Course from "./models/CourseModel"
import { writeFile } from "fs/promises"
import { join } from "path";
import Payment from "./models/Payment"

export async function handleApprove(formData) {
  let id = formData.get("_id")
  await connectDb()

  let record = await User.findByIdAndUpdate(id, { status: true })

  if(record.courseId){
    const course=await Course.findById(record.courseId)
    if(course){
      await new Payment({
        userId:id,
        amount:course.fee,

      }).save()
    }
  }
  redirect("/admin/students")
}


export const handleDelete = async (formData) => {


  await connectDb()
  let id = formData.get("_id")
  id = JSON.parse(id)

  let course = await Course.deleteMany({ category: id })

  let category = await Category.findByIdAndDelete(id)



  redirect("/admin/categories")
}

//categories 



export const handleSubmitCategory = async (formdata) => {

  await connectDb();
  let name = formdata.get("name");
  let description = formdata.get("description")

  let category = new Category({ name, description }).save();

  redirect("/admin/categories")



};

// Add courses 

export const handleAddCourse = async (formData) => {

  await connectDb();

  let title = formData.get("title")
  let description = formData.get("description")
  let fee = formData.get("fee")
  let duration = formData.get("duration")
  let category = formData.get("category")
  let instructor = formData.get("instructor")
  let startDate = formData.get("startDate")
  let endDate = formData.get("endDate")
  let difficulty = formData.get("difficulty")
  let status = formData.get("status")
  let prerequisites = formData.get("prerequisites")
  let enrollmentLimit = formData.get("enrollmentLimit")

  // image work 
  let image = formData.get("image")
  let bytes = await image.arrayBuffer();
  let buffer = Buffer.from(bytes)
  let path = join("./public", "images", image.name)
  await writeFile(path, buffer)

  let course = await new Course({
    title,
    description,
    fee,
    duration,
    category,
    startDate,
    endDate,
    difficulty,
    status,
    prerequisites,
    image: image.name,
    instructor,
    enrollmentLimit,
  }).save();
  let courseId = course._id
  let categoryUpdate = await Category.findByIdAndUpdate(category, { $push: { courses: courseId } })

  redirect("/admin/courses")
};


//Course Delete 

export const handleCourseDelete = async (courseId, formData) => {
  let course = await Course.findByIdAndDelete(courseId)
}


export const getCourse=async({title, categoryId})=>{
  try {
    await connectDb()
    let course
let query={
  status:"Published",
  title:{$regex: new RegExp(title, "i")}
}

if(categoryId){
  query.category=categoryId
}

course=await Course.find(query).populate("category")

    return course
  } catch (error) {
    console.log("GET COURSE", error)
    return [];
  }
}

