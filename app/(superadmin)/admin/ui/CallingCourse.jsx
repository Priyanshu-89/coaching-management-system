"use client";

import { handleCourseDelete } from "@/app/actions";
import Image from "next/image";

const CallingCourseTable = ({ courses }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border rounded-lg shadow-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Instructor</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Fee</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Difficulty</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Prerequisites</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Enrollment</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Start Date</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">End Date</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {courses.map((course, id) =>
                    {
                        let courseId=course._id
                        const handleCourseDeletewithId= handleCourseDelete.bind(null, courseId)
                      return (
                          <tr key={id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-900">{course.title}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{course.duration}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{course.instructor}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">₹{course.fee}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{course.difficulty || "Beginner"}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {Array.isArray(course.prerequisites) && course.prerequisites.length > 0
                                    ? course.prerequisites.join(", ")
                                    : "None"}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-500">{course.students?.length || 0}/{course.enrollmentLimit || 20}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{course.startDate ? new Date(course.startDate).toLocaleDateString() : "TBD"}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{course.endDate ? new Date(course.endDate).toLocaleDateString() : "TBD"}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{course.status}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{course.category?.name || "Uncategorized"}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {course.image && (
                                    <Image
                                        src={`/images/${course.image}`}
                                        alt={course.title}
                                        width={70}
                                        height={70}
                                        className="rounded-md object-cover"
                                    />
                                )}
                            </td>
                            <td className="px-6 py-4 text-sm flex gap-2">
                                <button className="px-3 py-1 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition">Edit</button>
                                <form action={handleCourseDeletewithId}>
                                    <button type="submit" className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition">Delete</button>
                                </form>

                            </td>
                        </tr>
                      )
})}
                </tbody>
            </table>
        </div>
    );
};

export default CallingCourseTable;
