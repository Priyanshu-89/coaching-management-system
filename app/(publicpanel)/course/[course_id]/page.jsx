import React from 'react'
import ViewCoursePage from '../../_components/ViewCoursePage'
import Course from '@/app/models/CourseModel';
import Categories from '../../_components/categories';
import Category from '@/app/models/Category';


const CourseView = async({params}) => {
    let courseId=params.course_id;
   let course = await Course.findById(courseId).populate("category").lean();
    let category = await Category.find({}).lean();

     course = JSON.parse(JSON.stringify(course));
  category = JSON.parse(JSON.stringify(category));

  return (
    <div className='md:px-[5%] px-2'>
      <Categories items={category}/>
      <ViewCoursePage course={course}/>
    </div>
  )
}

export default CourseView
