import React from "react";

const Message = () => {
  return (
    <div className="flex items-center justify-center px-4 pt-8 overflow-x-hidden">
      <div className="w-full max-w-lg bg-[#F3F3F3] rounded-lg p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full mb-6">
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2  focus:outline-none"
          />
        </div>
        <div className="w-full mb-6">
          <textarea
            rows={6}
            placeholder="Message"
            className="w-full p-4  focus:outline-none"
          ></textarea>
        </div>
        <div className="w-full text-left">
          <button className="bg-[#D1002C] rounded-sm px-6 py-2 text-white 
          text-base w-full md:w-auto">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
