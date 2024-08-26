import React from "react";

const Info = () => {
  return (
    <div className="px-4 pt-8">
      {/* Address */}
      <div className="flex items-start">
        <span className="flex items-center justify-center bg-[#D1002C] text-white w-12 h-12 rounded-full text-lg">
          <i className="icon-map-marker"></i>
        </span>
        <div className="ml-3">
          <p className="font-bold">Address:</p>
          <span className="text-[#AFAFBF]">
            198 West 21th Street, Suite 721
            <br /> New York NY 10016
          </span>
        </div>
      </div>
      {/* Phone */}
      <div className="flex items-start mt-10">
        <span className="flex items-center justify-center bg-[#D1002C] text-white w-12 h-12 rounded-full text-lg">
          <i className="icon-phone1"></i>
        </span>
        <div className="ml-3">
          <p className="font-bold">Phone:</p>
          <span className="text-[#D1002C] cursor-pointer">+ 1235 2355 98</span>
        </div>
      </div>
      {/* Email */}
      <div className="flex items-start mt-10">
        <span className="flex items-center justify-center bg-[#D1002C] text-white w-12 h-12 rounded-full text-lg">
          <i className="icon-paper-plane"></i>
        </span>
        <div className="ml-3">
          <p className="font-bold">Email:</p>
          <span className="text-[#D1002C] cursor-pointer">
            info@yoursite.com
          </span>
        </div>
      </div>
      {/* Website */}
      <div className="flex items-start mt-10">
        <span className="flex items-center justify-center bg-[#D1002C] text-white w-12 h-12 rounded-full text-lg">
          <i className="icon-earth"></i>
        </span>
        <div className="ml-3">
          <p className="font-bold">Website:</p>
          <span className="text-[#D1002C] cursor-pointer">yoursite.com</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
