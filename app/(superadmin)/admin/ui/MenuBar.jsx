import Link from 'next/link'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const MenuBar = () => {
  return (
    <header className='bg-gray-500 text-white py-2 px-1'>
      <div className="container  flex justify-start items-center">
<nav>
</nav>
    <Link href={'/admin'} className='text-gray-300 hover:text-white px-3 py-2 flex items-center gap-1'><MdOutlineDashboardCustomize />Dashboard</Link>
    <Link href={'/admin/admission'} className='text-gray-300 hover:text-white px-3 py-2 flex items-center gap-1'><FaGraduationCap />Admissions</Link>
    <Link href={'/admin/students'} className='text-gray-300 hover:text-white px-3 py-2  flex items-center gap-1'><PiStudentDuotone />Students</Link>
    <Link href={'/admin/categories'} className='text-gray-300 hover:text-white px-3 py-2 flex items-center gap-1'><MdOutlineCategory />Categories</Link>
    <Link href={'/admin/courses'} className='text-gray-300 hover:text-white px-3 py-2 flex items-center gap-1'><LuBookOpenText />Courses</Link>
    <Link href={'#'} className='text-gray-300 hover:text-white px-3 py-2 flex items-center gap-1'><RiMoneyRupeeCircleLine />
Payments</Link>
      </div>
    </header>
  )
}

export default MenuBar
