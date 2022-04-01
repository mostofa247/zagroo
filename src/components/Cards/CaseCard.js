import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/home.css";
import caseStudy1 from "../../assets/img/casestudy1.jpg";
import caseStudy2 from "../../assets/img/casestudy2.jpg";
import caseStudy3 from "../../assets/img/casestudy3.jpg";

const CaseCard = () => {
  return (
    <>
      <div className="relative items-case items-center flex px-20 py-20  flex-wrap">
        <div className="md:w-6/12 ">
          <div className="md:w-12/12 mr-auto px-4">
            <div class="news-card ">
              <Link href="#" class="news-card__card-link"></Link>
              <img src={caseStudy1} alt="" class="news-card__image" />
              <div class="news-card__text-wrapper">
                <h2 class="news-card__title">
                  API DEVELOPMENT FOR INDUSTRY-SPECIFIC SOFTWARE COMPANY
                </h2>
                <div class="news-card__post-date">Jan 29, 2022</div>
                <div class="news-card__details-wrapper">
                  <p class="news-card__excerpt">
                    CoolCare4 is a specialised product that our client, CoolCare
                    LTD, offers to multiple care homes to help them efficiently
                    manage their internal operations. The software streamlines
                    various business functions for these care homes, such as
                    data management, finance, HR, and CRM. Our client approached
                    us to build an API for their existing system to make data
                    accessible from several individual databases via a singular
                    interface. The solution that we developed allows our client
                    to consolidate the data that is spread out across multiple
                    systems and access it all in one place, via a new interface
                    at their customer’s end.&hellip;
                  </p>
                  <Link href="#" class="news-card__read-more">
                    Read more <i class="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-5/12 ">
          <div className="w-full md:w-6/12  mr-auto px-4">
            <div class="case-news">
              <Link href="#" class="case-news__card-link"></Link>
              <img src={caseStudy3} alt="" class="case-news__image" />
              <div class="case-news__text-wrapper">
                <h2 class="case-news__title">
                  MARKETPLACE PORTAL & BOOKING MANAGEMENT SOFTWARE
                </h2>
                <div class="case-news__post-date">Jan 29, 2018</div>
                <div class="case-news__details-wrapper">
                  <p class="case-news__excerpt">
                    The web portal that we developed for our client allows
                    various types of service providers, such as photography
                    studios, salons, and driving schools, to take their
                    businesses online and widen their target audience. Each
                    vendor who registers on our client’s platform can set up a
                    proper business profile and build a portfolio of all the
                    services that they offer. The website not only helps vendors
                    expand their audience but also facilitates their
                    customers.&hellip;
                  </p>
                  <Link href="#" class="case-news__read-more">
                    Read more <i class="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12  mr-auto px-4">
            <div class="case-news">
              <Link href="#" class="case-news__card-link"></Link>
              <img src={caseStudy2} alt="" class="case-news__image" />
              <div class="case-news__text-wrapper">
                <h2 class="case-news__title">FANTASY GOLF LEAGUE MOBILE APP</h2>
                <div class="case-news__post-date">Jan 29, 2018</div>
                <div class="case-news__details-wrapper">
                  <p class="case-news__excerpt">
                    Pick10 is an iOS app for fantasy golf games and competitions
                    — a platform for golf enthusiasts to create virtual teams
                    consisting of real-life golf players. Based on the
                    predictive nature of fantasy sports, users can compete with
                    their friends’ fantasy teams in upcoming golf competitions.
                    The app comes with features such as a variety of league
                    competitions, integrated messaging, live scoring updates,
                    and leaderboards that enhance the experience of fantasy game
                    management.&hellip;
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
    </>
  );
};

export default CaseCard;
