import React from "react";
import { Link } from "react-router-dom";

const CaseLastCard = () => {
  return (
    <>
      <section className="relative py-20 px-20 ">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto ">
          <div className="items-center flex flex-wrap">
            <div className="md:w-12/12 ">
              <div className="w-full md:w-5/12  mr-auto px-4 ">
                <div class="case-news ">
                  <Link href="#" class="case-news__card-link"></Link>
                  <img
                    src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    class="case-news__image"
                  />
                  <div class="case-news__text-wrapper">
                    <h2 class="case-news__title">
                      Predictive responsiveness in neurological recovery therapy
                    </h2>
                    <div class="case-news__post-date">Jan 29, 2018</div>
                    <div class="case-news__details-wrapper">
                      <p class="case-news__excerpt">
                        Predictive responsiveness in neurological recovery
                        therapy Medical devices and robotics company leverages
                        machine learning to launch predictive models to classify
                        the level of responsiveness of in-home neurological
                        recovery therapy&hellip;
                      </p>
                      <Link href="#" class="case-news__read-more">
                        Read more <i class="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12  mr-auto px-4">
              <div class="case-news ">
                <Link href="#" class="case-news__card-link"></Link>
                <img
                  src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                  class="case-news__image"
                />
                <div class="case-news__text-wrapper">
                  <h2 class="case-news__title">
                    Computer Vision Machine Learning for at-home patient health
                    monitoring systems
                  </h2>
                  <div class="case-news__post-date">Jan 29, 2018</div>
                  <div class="case-news__details-wrapper">
                    <p class="case-news__excerpt">
                      Predictive responsiveness in neurological recovery therapy
                      Medical devices and robotics company leverages machine
                      learning to launch predictive models to classify the level
                      of responsiveness of in-home neurological recovery
                      therapy&hellip;
                    </p>
                    <Link href="#" class="case-news__read-more">
                      Read more <i class="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseLastCard;

//flex flex-wrap
