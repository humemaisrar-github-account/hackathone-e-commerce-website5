
import React from "react"; 
import { IoMdArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
          <span className="ml-3 text-2xl font-bold">Bandage</span>
        
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-black">
            Home
          </a>
          <a href="/product" className="mr-5 hover:text-black">
             Product
          </a>
          <a href="#" className="mr-5 hover:text-black">
          Pricing
          </a>
          <a href="/contact" className="mr-5 hover:text-black">
            Contact
          </a>

        </nav>
        <p className="text-blue-600 font-bold mr-4">Login</p>
        <button className="font-bold inline-flex items-center hover:text-white bg-blue-400 border-0 py-2 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">
        
          Become a member
           <IoMdArrowForward/>
        </button>
      </div>
    </header>
  );
};

export default Header;
