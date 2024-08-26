import React from "react";
import BackgroundImage from "../../main/backgroundImage";
import BlogCard from "../home/BlogCard";
import Footer from "../../footer/footer.jsx";
import image1 from "../../../image/pages/home/recentBlog/image_1.jpg";
import image2 from "../../../image/pages/home/recentBlog/image_2.jpg";
import image3 from "../../../image/pages/home/recentBlog/image_3.jpg";
import image4 from "../../../image/pages/home/recentBlog/image_4.jpg";
import image5 from "../../../image/pages/home/recentBlog/image_5.jpg";
import image6 from "../../../image/pages/home/recentBlog/image_6.jpg";
import image7 from "../../../image/pages/home/recentBlog/image_7.jpg";
import image8 from "../../../image/pages/home/recentBlog/image_8.jpg";
const blog = () => {
  return (
    <div>
      <BackgroundImage title="blog" />
      <div className="pt-28 pb-40 flex flex-col items-center px-4">
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8">
          <BlogCard image={image1} />
          <BlogCard image={image2} />
          <BlogCard image={image3} />
          <BlogCard image={image4} />
        </div>
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8">
          <BlogCard image={image5} />
          <BlogCard image={image6} />
          <BlogCard image={image7} />
          <BlogCard image={image8} />
        </div>
        <div className="mt-20">
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
      </div>
      <div style={{
        clipPath: "polygon(34% 0, 100% 5%, 100% 100%, 47% 100%, 0 100%, 0 6%)",
      }}>
        <Footer />
      </div>
    </div>
  );
};

export default blog;
