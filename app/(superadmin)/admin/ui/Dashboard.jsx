
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { FaRegUser } from "react-icons/fa";
import { PiUserCheck } from "react-icons/pi";
import { LuBookOpenText } from "react-icons/lu";
import { CiCreditCard2 } from "react-icons/ci";

import User from "@/app/models/UserModel";

import Course from "@/app/models/CourseModel";
import connectDb from "@/app/utils/ConnectDb";
import Payment from "@/app/models/Payment";

const AdminDashboard = async () => {
  await connectDb()

  const totalStudents = await User.countDocuments({status:false});
  const totalAdmissions = await User.countDocuments({status:true});
  const totalCourses = await Course.countDocuments();
  const paymentData =await Payment.aggregate([
    {$group:{_id:null, total:{$sum:"$amount"}}}
  ])
const totalPayments=paymentData.length>0? paymentData[0].total:6000

  const stats = [
    {
      title: "Total Students",
      value: totalStudents,
      icon: <FaRegUser className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      title: "Total Admissions",
      value: totalAdmissions,
      icon: <PiUserCheck className="w-8 h-8 text-green-600" />,
      color: "bg-green-50",
    },
    {
      title: "Total Courses",
      value: totalCourses,
      icon: <LuBookOpenText className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50",
    },
    {
      title: "Payments",
      value: `₹${totalPayments}`,
      icon: <CiCreditCard2 className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50",
    },
  ];

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-6 rounded-2xl shadow-md ${item.color}`}
          >
            <div className="p-3 rounded-full bg-white shadow-sm">
              {item.icon}
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500 font-medium">{item.title}</p>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminDashboard;
