import React from "react";
import "../assets/styles/Blog.css";
import Navbar from "components/Navbars/AuthNavbar";
import Footer from "components/Footers/Footer";
import BlogCard from "components/Cards/BlogCard";
import HomeCard from "components/Cards/HomeCard";
import machineLearn from "../assets/img/machine1.jpg";

const Blog = () => {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-20 pb-35 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-15">
                  <h1 className="text-white text-bold  font-bold text-5xl">
                    Blog
                  </h1>
                  <p className="mt-5  text-lg text-blueGray-200">
                    The latest insights on the changing shape of the IT
                    landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relative py-20 ">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={machineLearn}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 mt-5">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Machine learning consulting: Guide to hiring an ml developer
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    You likely already understand the power of machine learning
                    (ML) and how it is used in an enterprise to develop advanced
                    applications that use artificial learning to solve business
                    problems. However, you'll also likely know that it is a
                    complex area of computer science and finding expert guidance
                    is necessary to be successful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="google-cloud-text  text-center font-bold ">
          <h1 className="cloud-text font-bold text-blueGray-800">MLOps</h1>
          <HomeCard />
        </div>
      </main>
      <div className="relative ">
        <div className="text-center ">
          <h1 className="font-bold leading-relaxed text-blueGray-800">Blog</h1>
          <p className="leading-relaxed text-blueGray-600">
            Get our perspective on key topics in Software Development and
            Machine Learning operations in the cloud
          </p>
        </div>
        <div>
          <BlogCard />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
