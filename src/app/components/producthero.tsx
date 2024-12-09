 
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
 
import Link from "next/link";
import { Button } from "@/components/ui/button";
 
import React from 'react'
 
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Menu } from "lucide-react";
 
 const AboutPage = () => {
  const products = [
    {
      id: 1,
     
      rating: 4.5,
      reviews: 10 ,
     
    },
  ]
   return (
     <div>
       
         
        <section className="text-gray-600 body-font overflow-hidden">
        
  <div className="container px-5 py-24 mx-auto ">
   
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="/aboutmain.png"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        Floating Phone
        </h1>
          {/* Product Cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            
              
         
  
              <div className="p-4">
               
                <div className="mt-2 text-yellow-500 flex">
                  {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {product.rating % 1 ? <span>☆</span> : null}
                  <span className="text-gray-500 ml-2">({product.reviews})</span>
                </div>
              </div>
             
          ))}
        </div>
        <h1 className='font-bold text-black'>$1,139.33</h1>
        <p className="leading-relaxed">
        Met minim Mollie non desert Alamo est sit cliquey dolor 
do met sent. RELIT official consequent door ENIM RELIT Mollie. 
Excitation venial consequent sent nostrum met.
        </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            
     
            <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none" />
          
          </div>
          <div className="flex ml-6 items-center">
       
            <div className="relative">
               
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          
          <button className="flex  text-white bg-blue-400 border-0 py-3 px-5 focus:outline-none hover:bg-blue-600 rounded">
          Selection  Button
          </button>
          <CiHeart  className="hover:text-blue-700 font-bold text-5xl rounded-full p-2" />
          <CiShoppingCart  className="hover:text-blue-700 font-bold text-5xl rounded-full p-2" />
          < FaEye className="hover:text-blue-700 font-bold text-5xl rounded-full p-2" />
        </div>
      </div>
    </div>
     {/* Mobile menu */}
     <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button variant={"outline"} size={"icon"} className="rounded-full">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Bandage</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-6 justify-center items-center">
              <Link href={"/"} className="text-sm font-normal hover:text-blue-600 hover:underline">
                Home
              </Link>
               
              <Link href={"/shop"} className="text-sm font-normal hover:text-blue-600 hover:underline">
                Shop
              </Link>
              <Link href={"/about"} className="text-sm font-normal hover:text-blue-600 hover:underline">
                About
              </Link>
              <Link href={"#"} className="text-sm font-normal hover:text-blue-600 hover:underline">
                 Blog
              </Link>
              <Link href={"/contact"} className="text-sm font-normal hover:text-blue-600 hover:underline">
                Contact
              </Link>
              <Link href={"#"} className="text-sm font-normal hover:text-blue-600 hover:underline">
                 Pages
              </Link>
              
            </div>
             
          </SheetContent>
        </Sheet>
  </div>
  
</section>
 
 
    <div className="p-6 md:p-12 lg:p-16">
      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-8 border-b border-gray-300 pb-3 mb-8">
        <button className="text-gray-500 hover:text-black transition">
          Description
        </button>
        <button className="text-black     font-semibold">
          Additional Information
        </button>
        <button className="text-gray-500 hover:text-black transition">
          Reviews  <span className="text-blue-600">(0)</span>
        </button>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Image */}
        <div className="md:col-span-1 flex justify-center">
          <img
            src="/aboutpic.png"
            alt="Room Design"
            className="rounded-md shadow-lg w-full max-w-sm"
          />
        </div>

        {/* Right Text Sections */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Text Section */}
          <div>
            <h2 className="text-xl font-bold mb-3">the quick fox jumps over</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Met minim Mollie non deserunt Alamo est sit cliquey dolor do met
              sunt. RELIT official consequat dolor ENIM MOLLIT Mollie. Exaction
              venial consequent sent nostrum met.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Met minim Mollie non deserunt Alamo est sit cliquey dolor do met
              sunt. RELIT official consequat dolor ENIM MOLLIT Mollie. Exaction
              venial consequent sent nostrum met.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Met minim Mollie non deserunt Alamo est sit cliquey dolor do met
              sunt. RELIT official consequat dolor ENIM MOLLIT Mollie. Exaction
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* Right List Section */}
          <div>
            <h2 className="text-xl font-bold mb-3">the quick fox jumps over</h2>
            <ul className="space-y-3">
              <li className="text-gray-600 flex items-center">
                <span className=" mr-2"><IoIosArrowForward/></span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-600 flex items-center">
                <span className=" mr-2"><IoIosArrowForward/></span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-600 flex items-center">
                <span className=" mr-2"><IoIosArrowForward/></span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-600 flex items-center">
                <span className=" mr-2"><IoIosArrowForward/></span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-600 flex items-center">
                <span className=" mr-2"><IoIosArrowForward/></span>
                the quick fox jumps over the lazy dog
              </li>
            </ul>
            <h2 className="text-xl font-bold mb-3 mt-3">the quick fox jumps over</h2>
            <ul className="space-y-3">
              <li className="text-gray-600 flex items-center">
                <span className=" mr-2"><IoIosArrowForward/></span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-600 flex items-center">
                <span className=" mr-2"><IoIosArrowForward/></span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-600 flex items-center">
                <span className="text-pink-500 mr-2"><IoIosArrowForward/></span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-600 flex items-center">
                <span className=" mr-2"><IoIosArrowForward/></span>
                the quick fox jumps over the lazy dog
              </li>
              <li className="text-gray-600 flex items-center">
                <span className=" mr-2"><IoIosArrowForward/></span>
                the quick fox jumps over the lazy dog
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
   
 
  
     </div>
   )
 }
 
 export default AboutPage