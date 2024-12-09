import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/pro1.png",
      oldPrice: "$16.48",
      colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"], // Color options
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/pro2.png",
      oldPrice: "$1160",
      colors: ["#FFA500", "#800080", "#008080", "#000000"],
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/pro3.png",
      oldPrice: "$1160",
      colors: ["#FFC0CB", "#4682B4", "#A52A2A", "#BDB76B"],
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/pro4.png",
      oldPrice: "$1160",
      colors: ["#FF6347", "#ADFF2F", "#D2691E", "#F5DEB3"],
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/pro5.png",
      oldPrice: "$1160",
      colors: ["#87CEEB", "#FFD700", "#9370DB", "#808000"],
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/pro6.png",
      oldPrice: "$1160",
      colors: ["#00CED1", "#FF69B4", "#556B2F", "#8B4513"],
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/pro7.png",
      oldPrice: "$1160",
      colors: ["#DC143C", "#32CD32", "#4682B4", "#9400D3"],
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/pro8.png",
      oldPrice: "$1160",
      colors: ["#708090", "#FF4500", "#2E8B57", "#FFDAB9"],
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center bg-[#FFFFFF] pt-10 pb-6 min-h-screen">
        {/* Header Section */}
        <div className="text-center mb-8 px-4">
          <p className="font-bold text-gray-600">Featured Products</p>
          <h1 className="text-3xl font-bold">BESTSELLER PRODUCTS</h1>
          <p className="text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center ">
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

              {/* Color Options */}
              <div className="flex space-x-2 mt-3">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className="w-5 h-5 rounded-full border border-gray-300"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-auto">
          <img
            src="/prob.png"
            alt="hero image"
            className="w-full h-auto mt-20 object-cover "
          />
          <img
            src="/prob2.png"
            alt="hero image"
            className="w-full h-auto  object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
