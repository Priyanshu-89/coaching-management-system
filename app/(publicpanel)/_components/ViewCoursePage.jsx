import { formatDuration, formatPrice } from "@/lib/format";
import Image from "next/image";


const ViewCoursePage = ({ course }) => {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 h-64 relative">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="w-full h-full object-cover rounded-xl"
          />
          <span
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${
              course.status === "Published"
                ? "bg-green-500"
                : course.status === "Draft"
                ? "bg-gray-500"
                : "bg-red-500"
            }`}
          >
            {course.status}
          </span>
        </div>

        <div className="md:w-2/3 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
          <p className="text-gray-500 text-sm">{course.category?.name || "Uncategorized"}</p>
          
          <div className="flex flex-wrap gap-2">
            {course.difficulty && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                {course.difficulty}
              </span>
            )}
            {course.prerequisites?.map((pre, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                {pre}
              </span>
            ))}
          </div>

          <p className="text-gray-600 mt-2 line-clamp-3">{course.description}</p>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <span>Instructor: {course.instructor}</span>
            <span>Duration: {course.duration}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Enrollment Limit: {course.enrollmentLimit}</span>
            <span>
              {course.startDate ? new Date(course.startDate).toLocaleDateString() : "--"} -{" "}
              {course.endDate ? new Date(course.endDate).toLocaleDateString() : "--"}
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar Fee & Enrollment */}
      <div className="mt-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          {/* Detailed Description */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Course Details</h2>
            <p className="text-gray-600">{course.description}</p>
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col gap-4">
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Fee:</span>
              <span className="text-green-600 font-semibold text-lg">{formatPrice(course.fee)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Status:</span>
              <span className="text-gray-700">{course.status}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Enrollment Limit:</span>
              <span className="text-gray-700">{course.enrollmentLimit}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Reviews, FAQ, or Instructor Info Section */}
      <div className="mt-6 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Instructor Info</h2>
        <p className="text-gray-600">{course.instructor}</p>
        <p className="text-base">Our instructor is a passionate educator and industry expert who has been guiding students and professionals for over 8 years. He specializes in modern programming practices, data-driven technologies, and software engineering. With a hands-on approach, he ensures learners gain practical skills that can be applied in real-world projects.</p>
        <small className="text-sm font-semibold">8+ years of teaching & industry experience</small>
      </div>

    </main>
  );
};

export default ViewCoursePage;
