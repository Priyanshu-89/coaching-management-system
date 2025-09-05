"use client";
import { useState } from "react";

import { FaRegBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";
import { signOut } from "next-auth/react";

const AdminHeader = () => {
  const [open, setOpen] = useState(false);
const handleLogout=async()=>{
  await signOut()
}

  return (
    <header className="w-full bg-white shadow px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Logo + Sidebar Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-600 hover:text-gray-900 md:hidden"
        >
          <FiMenu size={24} />
        </button>
        <Link href="/admin" className="text-2xl font-bold text-blue-600">
          Admin<span className="text-gray-800">Panel</span>
        </Link>
      </div>

      {/* Middle: Search */}
      <div className="hidden md:flex flex-1 justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
        />
      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center gap-6">
       

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200"
          >
            <FaRegUser size={20} />
            <span className="hidden md:inline text-sm font-medium text-gray-700">
              Admin
            </span>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border">
              <ul className="text-sm text-gray-700">
                <li>
                  <Link
                    href="/admin"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Home
                  </Link>
                </li>
               
                <li>
                  <button
                   onClick={handleLogout}
                    className="block px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
