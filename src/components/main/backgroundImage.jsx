import React from "react";
import Navbar from "../header/navbar.jsx";
import bg1 from "../../image/pages/header/bg_2.jpg";

const BackgroundImage = ({ title }) => {
  return (
    <div className="relative group overflow-hidden"
    style={{
      clipPath: 'polygon(52% 0, 100% 0, 100% 89%, 63% 100%, 0 86%, 0 0)',
    }}>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${bg1})` }}
        className="w-full h-[400px] md:h-[530px] bg-center bg-cover duration-500 flex flex-col justify-end items-start px-4 md:px-8"
      >
        <div className="text-white z-10 uppercase pb-24 pl-4 md:pl-36">
          <p className="text-base font-medium text-[#828282] ">
            Home
            <span className="icon-arrow_forward_ios mr-1 text-[#D1002C]"></span>
            {title}
            <span className="icon-arrow_forward_ios text-[#D1002C]"></span>
          </p>
          <h2 className="text-5xl mt-3 font-bold">{title}</h2> {/* Use the title prop */}
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
