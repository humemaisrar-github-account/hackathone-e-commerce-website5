import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/sp.png",
      oldPrice: "$16.48",
      colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"], // Color options
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/sp1.png",
      oldPrice: "$1160",
      colors: ["#FFA500", "#800080", "#008080", "#000000"],
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/sp2.png",
      oldPrice: "$1160",
      colors: ["#FFC0CB", "#4682B4", "#A52A2A", "#BDB76B"],
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/sp3.png",
      oldPrice: "$1160",
      colors: ["#FF6347", "#ADFF2F", "#D2691E", "#F5DEB3"],
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/sp4.png",
      oldPrice: "$1160",
      colors: ["#87CEEB", "#FFD700", "#9370DB", "#808000"],
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/sp5.png",
      oldPrice: "$1160",
      colors: ["#00CED1", "#FF69B4", "#556B2F", "#8B4513"],
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/sp6.png",
      oldPrice: "$1160",
      colors: ["#DC143C", "#32CD32", "#4682B4", "#9400D3"],
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      price: "$6.48",
      img: "/sp7.png",
      oldPrice: "$1160",
      colors: ["#708090", "#FF4500", "#2E8B57", "#FFDAB9"],
    },
    {
        id: 9,
        title: "Graphic Design",
        department: "English Department",
        price: "$6.48",
        img: "/sp8.png",
        oldPrice: "$1160",
        colors: ["#87CEEB", "#FFD700", "#9370DB", "#808000"],
      },
      {
        id: 10,
        title: "Graphic Design",
        department: "English Department",
        price: "$6.48",
        img: "/sp9.png",
        oldPrice: "$1160",
        colors: ["#00CED1", "#FF69B4", "#556B2F", "#8B4513"],
      },
      {
        id: 11,
        title: "Graphic Design",
        department: "English Department",
        price: "$6.48",
        img: "/sp10.png",
        oldPrice: "$1160",
        colors: ["#DC143C", "#32CD32", "#4682B4", "#9400D3"],
      },
      {
        id: 12,
        title: "Graphic Design",
        department: "English Department",
        price: "$6.48",
        img: "/sp11.png",
        oldPrice: "$1160",
        colors: ["#708090", "#FF4500", "#2E8B57", "#FFDAB9"],
      },
  ];

  return (
    <div>
    <div className="flex flex-col items-center bg-[#FFFFFF] pt-10 pb-6 min-h-screen mb-32">
       

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center "
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
              <p className="text-lg font-bold text-green-600">{product.price}</p>
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
    <div
  className="w-[313px] h-[74px] rounded-[6.73px] border-[1.35px] border-[#BDBDBD] mx-auto flex items-center mb-10"
  style={{ boxShadow: "0px 2px 4px 0px #0000001A" }}
>
  {/* First Part */}
  <div
    className="flex-1 flex items-center justify-center h-full border-r-[1px] border-[#BDBDBD] bg-[#F3F3F3]"
  >
    <h2 className="font-Montserrat font-bold text-[14px] text-[#BDBDBD]">
      First
    </h2>
  </div>

  {/* Second Part */}
  <div
    className="flex-1 flex items-center justify-center h-full border-r-[1px] border-[#BDBDBD] hover:bg-blue-500"
  >
    <span className="font-Montserrat font-bold text-[14px] text-blue-500 hover:text-white ">
      1
    </span>
  </div>

  {/* Third Part */}
  <div
    className="flex-1 flex items-center justify-center h-full border-r-[1px] border-[#BDBDBD]  hover:bg-blue-500"
  >
    <span className="font-Montserrat font-bold text-[14px] text-blue-500 hover:text-white">
      2
    </span>
  </div>

  {/* Fourth Part */}
  <div
    className="flex-1 flex items-center justify-center h-full border-r-[1px] border-[#BDBDBD] hover:bg-blue-500 "
  >
    <span className="font-Montserrat font-bold text-[14px] text-blue-500  hover:text-white">
      3
    </span>
  </div>

  {/* Fifth Part */}
  <div className="flex-1 flex items-center justify-center h-full  hover:bg-blue-500">
    <span className="font-Montserrat font-bold text-[14px] text-blue-500  hover:text-white">
      Next
    </span>
  </div>
</div>

    </div>
  );
};

export default Product;


