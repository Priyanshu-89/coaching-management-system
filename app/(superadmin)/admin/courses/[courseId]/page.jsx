
import Course from '@/app/models/CourseModel'
import connectDb from '@/app/utils/ConnectDb'
import IconBadge from '@/components/icon-badge'
import { LayoutDashboard } from 'lucide-react'
import React from 'react'
import TitleForm from './_components/TitleForm'
import DescriptionForm from './_components/description-form'
import InstructorForm from './_components/instructor-form'
import FeeForm from './_components/feeForm'
import DurationForm from './_components/durationForm'
import PrerequisitesForm from './_components/prerequisitesForm'
import EnrollForm from './_components/EnrollForm'
import StartDateForm from './_components/StartDateForm'
import EndStartForm from './_components/endDateForm'
import DifficultyForm from './_components/difficultyForm'
import CategoryForm from './_components/categoryForm'
import Category from '@/app/models/Category'
import { Action } from './_components/actions'
import { ImageForm } from './_components/imageForm'
import mongoose from 'mongoose'
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;



const CourseIdPage = async ({ params }) => {
  await connectDb()
  // const { courseId } =await params
  const { courseId } = params
  if (!courseId || !mongoose.Types.ObjectId.isValid(courseId)) {
    return <div className="p-6 text-red-500 font-semibold">Invalid Course ID</div>;
  }

const course = await Course.findById(courseId)
const categories = await Category.find()

if (!course) {
  return <div className="p-6 text-red-500 font-semibold">Course not found</div>;
}





const plainCourseCategory = JSON.parse(JSON.stringify(categories))
const plainCourse = JSON.parse(JSON.stringify(course))


const requiredFields = [
  course.title,
  course.description,
  course.fee,
  course.instructor,
  course.duration,
  course.category,
  course.difficulty,
  course.prerequisites,
  course.enrollmentLimit,
  course.image
]

const totalFields = requiredFields.length
const completedFields = requiredFields.filter(Boolean).length
const completedText = `${completedFields} / ${totalFields} completed`

const isCompleted = requiredFields.every(Boolean)

const options = [
  { label: 'Beginner', value: 'Beginner' },
  { label: 'Intermediate', value: 'Intermediate' },
  { label: 'Advanced', value: 'Advanced' },
]

return (
  <div className="p-6">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-medium">Course Setup</h1>
        <span className="text-sm text-slate-500 font-semibold py-2">
          Complete all fields {completedText}
        </span>
      </div>
      <Action
        disabled={!isCompleted}
        courseId={courseId}
        isPublish={course.status === "Published"}
      />


    </div>

    {/* 2 Column Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {/* Left Column */}
      <div className="space-y-6">
        <div className="flex items-center gap-x-2">
          <IconBadge icon={LayoutDashboard} />
          <h2 className="text-xl">Customize your course</h2>
        </div>

        <TitleForm initalData={plainCourse} courseId={courseId} />
        <DescriptionForm initalData={plainCourse} courseId={courseId} />
        <InstructorForm initalData={plainCourse} courseId={courseId} />
        <FeeForm initalData={plainCourse} courseId={courseId} />
        <StartDateForm initalData={plainCourse} courseId={courseId} />
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <DurationForm initalData={plainCourse} courseId={courseId} />
        <DifficultyForm
          initalData={plainCourse}
          courseId={courseId}
          options={options}
        />
        <CategoryForm
          initalData={plainCourseCategory}
          courseId={courseId}
          options={categories.map((cat) => ({
            label: cat.name,
            value: cat._id.toString(),
          }))}
        />
        <PrerequisitesForm initalData={plainCourse} courseId={courseId} />
        <EnrollForm initalData={plainCourse} courseId={courseId} />

        <EndStartForm initalData={plainCourse} courseId={courseId} />
        <ImageForm initalData={plainCourse} courseId={courseId} />
      </div>
    </div>
  </div>
)
}

export default CourseIdPage
