import React from "react";

const Featured = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-[#FFFFFF] pt-10 pb-6">
      <div className="w-3 h-10"></div>
      <h1 className="text-3xl font-bold text-center md:text-left">
        EDITOR’S PICK
      </h1>
      <p className="font-thin text-center md:text-left">
        Problems trying to resolve the conflict between
      </p>

      {/* Centered Image */}
      <div className="w-full flex justify-center mt-4 px-4 ">
        <img
          src="/row.png"
          alt="hero image"
          className="w-full sm:w-[700px] md:w-[900px] lg:w-[1000px] h-auto max-w-full max-h-[70vh] object-contain"
        />
      </div>
    </div>
  );
};

export default Featured;
