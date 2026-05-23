import React from "react";
import { Search } from "lucide-react";

import Logo from "../../assets/logo.png";
import UserProfileImage from "../../assets/user-profile-image.png";

const Navbar = () => {
  const navLinks = ["Home", "Employee", "Hiring", "Report", "Files", "Payroll"];

  return (
    <nav className="sticky top-0 h-[100px] w-full bg-white  min-w-min shadow-sm border-b border-gray-200  ">
      <div className="w-11/12 mx-auto   h-full  flex items-center justify-between ">
        {/* Logo */}
        <div className="text-2xl font-bold text-black w-[132px] h-[48px]  ">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Nav Links */}
        <div>
        <ul className="flex items-center gap-8 2xl:gap-16">
          {navLinks.map((link) => (
            <li
              key={link}
              className={`font-medium cursor-pointer transition text-lg ${
                link === "Employee"
                  ? "text-[#3E50F7] font-extrabold"
                  : "text-[#5A5B5F]"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>
        </div>
        

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative ml-10">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              type="text"
              placeholder="Search Anything..."
              className="max-w-[309px] h-[40px] rounded-sm border border-gray-300 pl-10 pr-5 outline-none focus:border-black"
            />
          </div>

          {/* User Profile */}
          <div className="flex  items-center gap-3 cursor-pointer">
            <div className="flex flex-col ">
              <span className="font-semibold text-base text-black-700">
                John Doe
              </span>
              <span className="text-gray-500 text-sm">Friday,29 September</span>
            </div>

            <img
              src={UserProfileImage}
              alt="user"
              className="w-10 h-10 rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
