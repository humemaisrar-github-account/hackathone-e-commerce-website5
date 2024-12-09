import React from "react";

const ProductDetails: React.FC = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto ">
        <div className="lg:w-4/5 mx-auto flex flex-wrap ">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
               About Company
            </h2>
            <h1 className="text-gray-900 text-5xl title-font font-bold mt-10">
            ABOUT US
            </h1>
          
            <p className="leading-relaxed mt-10">
            We know how large objects will act, <br/>
            but things on a small scale
            </p>
            <button className="flex  mt-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Get Quote Now
              </button>
            
              
            </div>
           
          {/* Right Section (Image) */}
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/ab1.jpg"
          />
        </div>
      </div>
      <div className="w-full bg-white py-10 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Top Section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
      {/* Left Content */}
      <div>
        <h3 className="text-red-500 font-semibold mb-2">Problems trying</h3>
        <p className="text-2xl font-bold text-gray-800">
          Met minim Mollie non desert <br/> Alamo est sit cliquey dolor do<br/>met sent.
        </p>
      </div>
      {/* Right Content */}
      <div className="mt-4 md:mt-0">
        <p className="text-gray-600">
          Problems trying to resolve the conflict between the two major realms of<br/> Classical physics: Newtonian mechanics.
        </p>
      </div>
    </div>

    {/* Statistics Section */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center ">
      {/* Statistic 1 */}
      <div>
        <p className="text-4xl font-bold text-gray-800">15K</p>
        <p className="text-gray-600">Happy Customers</p>
      </div>
      {/* Statistic 2 */}
      <div>
        <p className="text-4xl font-bold text-gray-800">150K</p>
        <p className="text-gray-600">Monthly Visitors</p>
      </div>
      {/* Statistic 3 */}
      <div>
        <p className="text-4xl font-bold text-gray-800">15</p>
        <p className="text-gray-600">Countries Worldwide</p>
      </div>
      {/* Statistic 4 */}
      <div>
        <p className="text-4xl font-bold text-gray-800">100+</p>
        <p className="text-gray-600">Top Partners</p>
      </div>
    </div>
    <div className="flex justify-center items-center min-h-screen">
  <div className="w-full max-w-3xl">
    <img 
      src="/pica.png" 
      alt="hero image" 
      className="w-full h-auto object-cover" 
    />
  </div>
</div>
  </div>
  
</div>

<div className="flex flex-col items-center justify-start bg-[#FFFFFF] pt-10 pb-6">
      <div className="w-3 h-10"></div>
      <h1 className="text-3xl font-bold text-center md:text-left">
      Big Companies Are Here
      </h1>
      <p className="font-thin text-center ">
      Problems trying to resolve the conflict between <br/>
      the two major realms of Classical physics: Newtonian mechanics 
      </p>
      </div>
      
<div className="   flex justify-center items-center ">
    
      <div className="w-[800px] h-auto ">
        <img 
          src="/shopb.png" 
          alt="hero image" 
          className="w-full h-auto object-cover" 
        />
        
      </div>
    </div>
    
    <div className="w-full">
        <div className="w-full h-auto">
          <img
            src="/aboutpic2.png"
            alt="hero image"
            className="w-full h-auto mt-20 object-cover "
          />
          
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

