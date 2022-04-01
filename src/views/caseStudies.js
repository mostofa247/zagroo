import React from "react";
import Navbar from "components/Navbars/AuthNavbar";
import { Link } from "react-router-dom";
import Footer from "components/Footers/Footer";
import CaseCard from "components/Cards/CaseCard";
import crossPlatFrom from "../assets/img/crossplatfrom.jpg";

const caseStudies = () => {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-20 pb-35 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')",
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
                  <h1 className="text-white font-semibold text-5xl">
                    Beauty of Case Study.
                  </h1>
                  <p className="mt-5 text-lg text-blueGray-200">
                    A case study is an in-depth study of one person, group, or
                    event. In a case study, nearly every aspect of the subject's
                    life and history is analyzed to seek patterns and causes of
                    behavior. Case studies can be used in a variety of fields
                    including psychology, medicine, education, anthropology,
                    political science, and social work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          ></div>
        </div>

        <section className="relative py-20 bg-blueGray-200">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          ></div>
          <div className="container mx-auto px-8">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl mb-2 font-semibold leading-normal  text-uppercase">
                    Enabling a leading retailer to manage loyalty programmes
                    with a cross-platform application
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    Morrisons is one of the largest supermarket chains. With
                    over 100,000 employees working in their stores and head
                    office, they serve millions of customers every week.
                    Compared to most other top supermarket chains, Morrisons
                    manufactures a large volume of their food products.
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                    Morrisons, one of the leading supermarket chains, needed to
                    create new clubs for members of their loyalty programme,
                    granting access to special offers and discounts for key
                    workers in the Healthcare and Education sectors.
                  </p>
                  <Link to="/" className="font-bold text-blueGray-700 mt-8">
                    Check ZAGROO!
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={crossPlatFrom}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="text-center mt-5">
          <h1 className="font-bold leading-relaxed text-blueGray-800">
            Case Studies
          </h1>
          <p className="leading-relaxed text-blueGray-600">
            See our work and the results we've helped our clients to achieve
          </p>
        </div>
        <CaseCard />
      </main>
      <Footer />
    </>
  );
};

export default caseStudies;
