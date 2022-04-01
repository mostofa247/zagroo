/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import "../assets/styles/home.css";
import CaseCard from "components/Cards/CaseCard";
import HomeCard from "components/Cards/HomeCard";
import homebrief from "../assets/img/mobile-app.png";

export default function Index() {
  return (
    <>
      <Navbar transparent />
      <div className="relative pt-16 pb-32 flex content-center items-center  min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 ml-auto mr-auto ">
              <div className="pr-15 lg:w-6/12">
                <h1 className="text-white font-bold mt-10">
                  Accelerate your path to{" "}
                  <span className=" font-bold">
                    Software Development & Machine Learning
                  </span>
                </h1>
                <p className="mt-8 text-bold font-bold text-blueGray-200">
                  Work with experts who architect, build, and manage enterprise
                  Level Software Development, Data and Machine Learning systems
                  for a living
                </p>
                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="index-home-button text-bold font-bold"
                  >
                    Lat's Talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-20 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Dedicated support</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    30-day warranty & 24/7 support with well-defined SLAs that
                    keep your software running and active.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Tailored for Your Business
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    We are trusted by startups and small, medium and large
                    enterprises alike.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Discovery Phase</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    We offer a 3-6 week service that helps visualise your idea
                    and creates a well-defined scope of work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                BRIEFING MANAGEMENT PLATFORM
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                GoodCore helped develop and launch Software and Machine Learning
                based offering for a Silicon Valley startup. The platform is
                used by numerous Fortune 100 companies for managing corporate
                briefing events and implements sophisticated workflows to
                streamline the operations around such events.
              </p>
              <Link to="/" className="font-bold text-blueGray-700 mt-8">
                Check ZAGROO!
              </Link>
            </div>

            <div className="w-full md:w-5/12  mr-auto ml-auto mt-10">
              <div className="relative flex flex-col  ">
                <img
                  alt="..."
                  src={homebrief}
                  className="w-full align-middle"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="google-cloud-text mt-20 text-center font-bold ">
        <h1 className="cloud-text text-blueGray-800">
          Outcomes We Celebrate With <br />
          Our Customers
        </h1>
      </div>
      <CaseCard />
      <div className="google-cloud-text mt-20 text-center font-bold ">
        <h1 className="cloud-text text-blueGray-800">
          Free resources for Software Development, Machine Learning
          <br />
          on Google Cloud Platform
        </h1>
      </div>
      <HomeCard />

      <Footer />
    </>
  );
}
