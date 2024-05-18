import React from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import Markdown from 'markdown-to-jsx'
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const BlogPost = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.data.find(blog => blog.id.toString() === id);

  if (!blog) {
    return <p>Blog post not found for ID: {id}</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="coverImg flex flex-col justify-center items-center md:h-[275px] h-40 w-full bg-cover">
        <h1 className="md:text-6xl text-3xl m-2 uppercase font-semibold text-white">
          Blog <span className="text-gray-700">Detail</span>
        </h1>
        <h1 className="md:text-3xl text-xl uppercase font-light text-gray-700">
          <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
        </h1>
      </div>
      <section className="text-black body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <h1 className="text-4xl text-center mb-8">{blog.attributes.blogTitle}</h1>
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            <div className="rounded-lg h-96 overflow-hidden">
              <img
                alt="Blog Cover"
                className="object-cover object-center h-full w-full"
                src={`http://localhost:1337${blog.attributes.blogCover.data.attributes.url}`}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-64 h-64 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  {/* <img src=http://localhost:1337/uploads/thumbnail_photo_1492552181161_62217fc3076d_bf676092eb.jpeg alt="" className="w-full h-full object-cover" srcset="" /> */}
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {blog.attributes.blogPosted} {/* Use actual author name attribute */}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg text-justify mb-4">
                  {blog.attributes.blogContent}
                </p>
              </div>
            </div>
          </div>
          {/* <Markdown>
          {blog.attributes.blogDescription}
          </Markdown> */}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default BlogPost;
