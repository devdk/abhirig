/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { RiArrowRightLine } from "react-icons/ri";

const BlogPage = ({ blogs }) => {
  console.log("BlogPage", blogs);

  return (
    <>
      <Navbar />
      <div className="detailCover flex flex-col justify-center items-center md:h-[275px] h-40 w-full bg-cover">
        <h1 className="md:text-6xl text-3xl m-2 uppercase font-semibold text-gold-100">
          Our <span className="text-gray-700">Blog</span>
        </h1>
        <h1 className="md:text-3xl text-xl uppercase font-light text-gray-700">
          what are you thinking for
        </h1>
      </div>
      <div className="section w-full p-6 md:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {(!blogs || !Array.isArray(blogs.data) || blogs.data.length === 0) ? (
          <p>No blogs found.</p>
        ) : (
          blogs.data.map((blog) => (
            <div
              key={blog.id}
              className=" border-2  max-w-md border-white rounded-lg shadow-md  hover:cursor-pointer transition duration-200"
            >
              <div className="h-80 overflow-hidden rounded-t-lg">
                <img
                  src={`http://localhost:1337${blog.attributes.blogCover.data.attributes.url}`}
                  alt=""
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-300 "
                />
              </div>
              <div className="p-4">
                <h5 className="text-xl font-semibold text-gray-800">
                  {blog.attributes.blogTitle}
                </h5>
                <p className="text-sm text-justify text-gray-700 mt-2">
                  {blog.attributes.blogContent}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="py-2 flex gap-2 text-gray-400 rounded-lg hover:text-darkGreen transition duration-200 hover:translate-x-2 hover:translate-y-1 hover:scale-105"
                >
                  Read More{" "}
                  <RiArrowRightLine size={24} color="green" className="my-icon" />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer/>
    </>
  );
};

export default BlogPage;
