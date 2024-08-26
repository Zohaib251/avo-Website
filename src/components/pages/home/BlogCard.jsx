import React from "react";

const BlogCard = ({ image }) => {
  return (
    <div className="flex mt-12">
      <div className="w-56">
        <p className="text-xl mb-3">Amplify your blockchain team</p>
        <img src={image} alt="Blog" className="w-full h-64" />
        <p className="mt-4">
          JUNE 01, 2020 ADMIN <span className="icon-comment ml-1"></span> 3
        </p>
        <p className="mt-4 text-[#A3A3B7]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
