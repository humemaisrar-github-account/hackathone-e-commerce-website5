import { IoIosArrowForward } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { TfiMenuAlt } from "react-icons/tfi";
import Footer from "./footer";



const Shop = () => {
    return (
        <div className="min-h-screen bg-gray-100">
        <header className="bg-slate-100 ">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Shop</h1>
            <nav className="flex items-center space-x-2">
              <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
              <IoIosArrowForward className="text-gray-400" />
              <span className="text-gray-700 ">Shop</span>
            </nav>
          </div>
        </header>
       
          
        <main className="max-w-7xl mx-auto px-4 py-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Products</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {/* Add your shop items here */}
    <div className="flex justify-center">
      <img src="si1.png" alt="Product 1" className="w-full h-auto object-cover" />
    </div>
    <div className="flex justify-center">
      <img src="si2.png" alt="Product 2" className="w-full h-auto object-cover" />
    </div>
    <div className="flex justify-center">
      <img src="si3.png" alt="Product 3" className="w-full h-auto object-cover" />
    </div>
    <div className="flex justify-center">
      <img src="si4.png" alt="Product 4" className="w-full h-auto object-cover" />
    </div>
    <div className="flex justify-center">
      <img src="si5.png" alt="Product 5" className="w-full h-auto object-cover" />
    </div>
  </div>
  <div className="flex flex-wrap justify-between items-center mt-16 space-y-4">
  {/* Left side: Showing all 12 results */}
  <p className="text-sm text-gray-600 flex-shrink-0">Showing all 12 results</p>

  {/* Right side: Views and Filter Button */}
  <div className="flex flex-wrap items-center space-x-4 md:space-x-6">
    {/* Views Dropdown and Icons */}
    <div className="flex items-center space-x-2">
      <label className="text-sm text-gray-600" htmlFor="views">Views:</label>
      <div className="bg-white border border-gray-300 rounded-md flex items-center px-4 py-3">
        <HiViewGrid className="  text-black " />
        <TfiMenuAlt className="text-blackml-2" />
      </div>
      <select
        id="views"
        className="text-sm border border-gray-300 px-2 py-1 rounded-md h-10"
      >
        <option>Popularity</option>
        <option>Price</option>
        <option>Newest</option>
      </select>
    </div>

    {/* Filter Button */}
    <button className="bg-blue-500 text-white px-4 py-2 w-28 rounded-md hover:bg-blue-600 text-sm">
      Filter
    </button>
  </div>
</div>
<div className="w-full mt-14">
      <div className="w-full h-auto">
        <img 
          src="/shopb.png" 
          alt="hero image" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
     
</main>
 


      <Footer />
      
      </div>
      
    );
  };
  
  export default Shop;
  