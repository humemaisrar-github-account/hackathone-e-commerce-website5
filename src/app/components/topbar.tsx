 
 
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiFacebookBoxFill, RiYoutubeFill } from "react-icons/ri";
import { PiTwitterLogoBold } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-2  flex-col lg:flex-row items-center lg:justify-between hidden lg:flex">
        
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <span className="text-xs lg:text-base">225-555-0118</span>
          <a
            href="mailto:michelle.rivera@example.com"
            className="text-xs lg:text-base"
          >
            michelle.rivera@example.com
          </a>
        </div>

        {/* Center Section */}
        <div className="text-xs lg:text-base text-center lg:text-left my-4 lg:my-0">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>

        {/* Right Section (Social Icons) */}
        <div className="flex items-center justify-center space-x-6">
          <span className="hidden lg:flex text-xs lg:text-base">Follow us:</span>
          <CiInstagram className="hover:text-orange-500 font-bold text-4xl sm:text-4xl rounded-full p-2 " />
          <RiYoutubeFill className="hover:text-red-500 font-bold text-4xl sm:text-4xl rounded-full p-2" />
          <RiFacebookBoxFill className="hover:text-blue-500 font-bold text-4xl sm:text-4xl rounded-full p-2" />
          <PiTwitterLogoBold className="hover:text-blue-700 font-bold text-4xl sm:text-4xl rounded-full p-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;




 

 