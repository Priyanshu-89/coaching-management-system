

import CourseCard from "./CourseCard";


const CoursesGrid = async ({ courses = [] }) => {
  if (!Array.isArray(courses)) courses = [];
   if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        🚫 Course not available
      </div>
    );
  }

  return (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full my-5">
      { courses.map((course) => (
        <CourseCard
         key={course._id}
         id={course._id}
         title={course.title}
         image={course.image}
         fee={course.fee}
          enrollmentLimit={course.enrollmentLimit}
          category={course.category?.name}
          duration={course.duration}
          prerequisites={course.prerequisites}
          // course={course}
           />
      ))}
    </div>
  </>
  );
};

export default CoursesGrid;
