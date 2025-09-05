import Course from '@/app/models/CourseModel';

import connectDb from '@/app/utils/ConnectDb'

import Link from 'next/link';
import { columns } from './columns';
import { DataTable } from '../ui/data-table';



const CoursesPage = async() => {
    await connectDb();

    let courses=await Course.find().populate("category")
courses=JSON.parse(JSON.stringify(courses))

  return (
    <div className='flex flex-col gap-5 w-full px-[10%]'>
        <div className="flex justify-between w-full items-center">
      <h1 className='my-3 text-3xl font-semibold text-slate-600'>All Courses Available ({courses.length})</h1>
      <Link href={'/admin/courses/insert'} className='text-white bg-green-600 px-3 py-2 rounded-lg'>Add Courses</Link>
        </div>
  
    <div className="flex gap-5">
      <DataTable columns={columns} data={courses}/>

    </div>
    </div>
  )
}

export default CoursesPage
