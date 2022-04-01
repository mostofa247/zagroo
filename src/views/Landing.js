import React from "react";
import { Link } from "react-router-dom";
import about1 from "../assets/img/about1.jpeg";
import aboutLearn from "../assets/img/about2.jpeg";

// components
import Navbar from "components/Navbars/AuthNavbar.js";

import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center  min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
            }} /*https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80*/
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
                  <h1 className="text-white font-bold mt-10">ABOUT ZAGROO</h1>
                  <p className="mt-8 text-bold font-bold text-blueGray-200">
                    Analytical, yet creative. Risk takers, yet data driven.
                    Artists, yet engineers. Friends first, colleagues second.
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

        <section className="relative py-20 bg-blueGray-200">
          <div className="text-center font-bold mb-8 ">
            <h1>What We Do</h1>
          </div>
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          ></div>
          <div className="container mx-auto px-8 mt-10">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    To create success & happiness for our customers & employees
                    with our passion for technology while creating high growth
                    opportunity of fulfilling employment thus serving humanity.
                    Businesses fail to apply Software & machine learning (ML) to
                    produce bottom line business value. In fact, only 15% of
                    models end up in use in day-to-day business. Wow right? We
                    have set out to solve for this industry problem. ML is not
                    "new science", it has been in practice since the 1940s. What
                    is new, is operating this technology at scale in today's
                    dynamic and demanding technology landscape.
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                    Organizations fail to put machine learning into practice due
                    to the challenges of "operationalizing" the models. 9/10
                    businesses lack best-in-class cloud architecture and are
                    void of an operating model for ML. This is critical to
                    integrate and scale the technology in applicable business
                    settings.
                  </p>
                  <p className="font-bold text-blueGray-700 mt-8">
                    To be successful at ML you need to develop MLOps
                    capabilities — that is, combine best-in-class cloud
                    infrastructure, best practices, and an operating model for
                    your team. This is where we shine. We see MLOps as a
                    solution that solves for people, technology, and businesses
                    challenges that arise with machine learning.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto mt-8">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={about1}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 ">
          <div className="container mx-auto px-8">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto ">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={aboutLearn}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 mt-8">
                <div className="md:pr-12">
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    People — MLOps introduces a cultural shift from an over
                    reliance and emphasis on data science to adopting a model
                    that sees data science, ML engineering, and cloud architects
                    working together seamlessly to ship models along a pipeline
                    to production. What makes this possible is the right cloud
                    architecture. Technology — your cloud should be designed
                    with a set of best practices and provide teams with
                    automation in tricky areas of ML at scale like maintaining
                    quality and adapting to changes in data. Now leaders must
                    capitalize on these capabilities. Business — MLOps enables
                    businesses to evolve to be multi-model, multi-product
                    machine learning organizations. Machine learning can bring
                    innovation into all aspects of the business, your
                    competitive advantage.
                  </p>

                  <p className="font-bold text-blueGray-700 mt-8">
                    Along with Software Development & MLOps, "Zagroo" supports
                    our customers in the areas complementary to Software
                    Development & MLOps, that are the Technology and data
                    platforms—Web App Development, Mobile App Development, ERP,
                    ingestion, processing, data lakes, warehousing, and
                    analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-lightBlue-400">
                  Here are our heroes
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/img/co-founder-zagroo.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold text-lightBlue-400">
                      Eleas Ahmed
                    </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Co-Founder
                    </p>
                    <div className="mt-6">
                      <a href="https://www.linkedin.com/in/eleas-ahmed-446445159/">
                        <button
                          className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/img/co-founder-3.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold text-lightBlue-400">
                      Kamrul Hasan Kabir
                    </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Co-Founder
                    </p>
                    <div className="mt-6">
                      <a href="...">
                        <button
                          className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../assets/img/soft1.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold text-lightBlue-400">
                      Md Mostofa Kamal
                    </h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Software Engineer
                    </p>
                    <div className="mt-6">
                      <a href="https://www.linkedin.com/in/md-mostofa-kamal-0884b11aa/">
                        <button
                          className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <br />
                <h2 className="text-4xl font-semibold text-white">
                  WHY CHOOSE US?
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Have the peace of mind that you are working with one of the
                  best bespoke software development companies.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Tailored for Your Business
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  We are trusted by startups and small, medium and large
                  enterprises alike.
                </p>
              </div>

              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Dedicated support
                </h5>
                <p className="mt-2 mb-4  text-blueGray-400">
                  30-day warranty & 24/7 support with well-defined SLAs that
                  keep your software running.
                </p>
              </div>

              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <h5 className="text-xl  mt-5 font-semibold text-white">
                  On Time and Budget
                </h5>
                <p className="mt-2 mb-4  text-blueGray-400">
                  We have a time-tested agile process that will deliver your
                  software project quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
