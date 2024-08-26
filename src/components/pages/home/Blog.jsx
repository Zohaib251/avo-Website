import React from "react";
import BlogCard from "./BlogCard";
import image1 from "../../../image/pages/home/recentBlog/image_1.jpg";
import image2 from "../../../image/pages/home/recentBlog/image_2.jpg";
import image3 from "../../../image/pages/home/recentBlog/image_3.jpg";
import image4 from "../../../image/pages/home/recentBlog/image_4.jpg";
const Blog = () => {
  return (
    <div className="bg-[#F3F3F3] pt-28 pb-40 flex flex-col items-center px-4"
    style={{
      clipPath:
        "polygon(33% 0, 100% 3%, 100% 100%, 64% 100%, 0 100%, 0 3%)"
        ,
        
    }}
    >
      <h2 className="text-4xl md:text-4xl text-[#333333] font-bold text-center">
        Recent Blog
      </h2>
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8">
      <BlogCard
        image={image1}
        />
      <BlogCard
        image={image2}
        />
      <BlogCard
        image={image3}
        />
      <BlogCard
        image={image4}
        />
      
      </div>
    </div>
  );
};

export default Blog;
