import React from "react";
 

const Aboutitem = () => {
  const products = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/apic.png",
      oldPrice: "$16.48",
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/apic1.png",
      oldPrice: "$1160",
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/apic2.png",
      oldPrice: "$1160",
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/apic4.png",
      oldPrice: "$1160",
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/apic5.png",
      oldPrice: "$1160",
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "apic6.png",
      oldPrice: "$1160",
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/apic.png",
      oldPrice: "$1160",
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/apic1.png",
      oldPrice: "$1160",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center bg-[#e4dede] pt-10 pb-6 min-h-screen">
        {/* Header Section */}
        <div className="text-center mb-8 px-4">
          <p className="font-bold text-gray-600">Featured Products</p>
          <h1 className="text-3xl font-bold">BESTSELLER PRODUCTS</h1>
          <p className="text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mb-12 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center bg-white  "
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[330px] object-cover  "
              />
              {/* Product Details */}
              <p className="mt-3 text-lg font-semibold text-gray-800">
                {product.title}
              </p>
              <p className="text-sm text-gray-500">{product.department}</p>

              {/* Price Section */}
              <div className="flex items-center">
                <p className="text-sm text-gray-500 line-through mr-2 mt-1">
                  {product.oldPrice}
                </p>
                <p className="text-lg font-bold text-green-600">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-[#e4dede] flex justify-center items-center ">
      <div className="w-[700px] h-auto ">
        <img 
          src="/shopb.png" 
          alt="hero image" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
     
    </div>
  );
};

export default Aboutitem;
