import React from "react";
const TeamCard = ({ image, name, role }) => {
  const isTeam5 = name === "John Wilson" && role === "Web Programmer";
  return (
    <div className="flex flex-col items-center  justify-center mt-12">
      <div className="relative group w-56 h-72">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 flex justify-start items-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col space-y-2 text-[#D1002C]">
            <span className="icon-twitter hover:bg-[#D1002C] hover:text-white border-2 rounded-full p-2 bg-white"></span>
            <span className="icon-facebook hover:bg-[#D1002C] hover:text-white border-2 rounded-full p-2 bg-white"></span>
            <span className="icon-google hover:bg-[#D1002C] hover:text-white border-2 rounded-full p-2 bg-white"></span>
            <span className="icon-instagram hover:bg-[#D1002C] hover:text-white border-2 rounded-full p-2 bg-white"></span>
          </div>
        </div>
      </div>
      <div className={`p-2 text-left ml-[-60px] ${isTeam5 ? "w-36" : "w-[139px]"}`}>
        <p className="font-semibold text-black hover:text-[#D1002C] text-2xl">
          {name}
        </p>
        <p className="text-[#D1002C]">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
