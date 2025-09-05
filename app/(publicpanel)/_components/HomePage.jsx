"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { signOut, useSession } from "next-auth/react";
import SearchInput from "@/components/search";

const handleLogout = async () => {
  await signOut();
};

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  // get first letter of name/email
  const firstLetter =
    session?.user?.name?.charAt(0)?.toUpperCase() ||
    session?.user?.email?.charAt(0)?.toUpperCase() ||
    "";

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Pro<span className="text-gray-800">Tech</span>
        </Link>

        <SearchInput/>

      
       

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {!session ? (
            <>
              <Link
                href="/register"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Register for Student
              </Link>
              <Link
                href="/login"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              {/* Avatar Circle */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {firstLetter}
              </div>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition text-center"
                onClick={async () => {
                  setIsOpen(false);
                  await handleLogout();
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 size={28} /> : <GiHamburgerMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-3 px-6 py-4 text-gray-700 font-medium">
           

            {!session ? (
              <>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Register for Student
                </Link>
                <Link
                  href="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                {/* Avatar + Logout */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    {firstLetter}
                  </div>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition text-center"
                    onClick={async () => {
                      setIsOpen(false);
                      await handleLogout();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;
