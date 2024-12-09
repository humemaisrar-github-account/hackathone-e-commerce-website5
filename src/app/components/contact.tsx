import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto ">
        <div className="lg:w-4/5 mx-auto flex flex-wrap ">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
            CONTACT US
            </h2>
            <h1 className="text-gray-900 text-5xl title-font font-bold mt-10">
            Get in touch 
today!
            </h1>
          
            <p className="leading-relaxed mt-10">
            We know how large objects will act, 
but things on a small scale
            </p>
            <p className="flex  mt-10 font-bold text-black   ">
            Phone ; +451 215 215 <br/>
            Fax : +451 215 215
              </p>
            
              
            </div>
              {/* Right Section (Image) */}
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/contactpic.jpg"
          />
        </div>
      </div>
 
     
             
    </section>
    <div className="w-full mt-14 flex justify-center items-center">
      <div className="w-[800px] h-auto">
        <img 
          src="/contact.png" 
          alt="hero image" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
    </div>
    
  )
}

export default Contact