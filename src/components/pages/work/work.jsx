import React from "react";
import BackgroundImage from "../../main/backgroundImage";
import Work from "../home/work.jsx";
import AdditionalWork from "./additionalWork.jsx";
import Footer from "../../footer/footer.jsx";
const work = () => {
  return (
    <div>
      <BackgroundImage title="work" />
      <div className="mt-20">
        <Work />
        <AdditionalWork />
      </div>
      <div className="my-24 flex justify-center">
        <div className="flex space-x-2">
          <button className="rounded-full border text-lg hover:text-white  hover:bg-[#D1002C] border-gray-300 px-3 p-1">
            <span className="text-gray-500">&lt;</span>
          </button>
          <button className="rounded-full bg-[#D1002C] text-lg text-white px-3 p-1">
            1
          </button>
          <button className="rounded-full border text-lg hover:text-white hover:bg-[#D1002C] border-gray-300 px-3 p-1">
            2
          </button>
          <button className="rounded-full border text-lg hover:text-white  hover:bg-[#D1002C] border-gray-300 px-3 p-1">
            3
          </button>
          <button className="rounded-full border text-lg hover:text-white  hover:bg-[#D1002C] border-gray-300 px-3 p-1">
            4
          </button>
          <button className="rounded-full border text-lg hover:text-white  hover:bg-[#D1002C] border-gray-300 px-3 p-1">
            5
          </button>
          <button className="rounded-full border text-lg hover:text-white  hover:bg-[#D1002C] border-gray-300 px-3 p-1">
            <span className="text-gray-500">&gt;</span>
          </button>
        </div>
      </div>
      <div
        style={{
          clipPath:
            "polygon(34% 0, 100% 5%, 100% 100%, 47% 100%, 0 100%, 0 6%)",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default work;
