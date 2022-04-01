import React from "react";
import "../../assets/styles/Footer.css";
import FooterLogo from "../../assets/img/logo1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div class="footer-gray">
          <div class="footer-custom">
            <div class="footer-lists">
              <div class="footer-list-wrap">
                <img src={FooterLogo} alt="" className="footer-logo" />
                <h6 class="footer-service-title">Dhaka - Headquarters</h6>
                <ul class="ftr-links-sub">
                  <li>
                    <a href="/" rel="nofollow">
                      Block-D, Road No: 4
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="nofollow">
                      House No-5, Mirpur-1
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="nofollow">
                      Dhaka, Bangladesh
                    </a>
                  </li>
                </ul>
                <h6 class="footer-service-title">Austin, Texas</h6>
                <ul class="ftr-links-sub"></ul>
                <h6 class="footer-service-title">Dhaka, Bangladesh</h6>
                <ul class="ftr-links-sub">
                  <li>
                    <a href="/" rel="nofollow">
                      Thakurgaon Sadar
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="nofollow">
                      Thakurgaon
                    </a>
                  </li>
                </ul>
                <div className=" py-4 mt-8">
                  <ul class="ftr-links-sub ">
                    <h1 className=" ftr-hdr">Get In Tuch</h1>
                    <li>
                      <a href="/" rel="nofollow">
                        Mobile No: +8801714-977054
                      </a>
                    </li>
                    <li>
                      <a href="/" rel="nofollow">
                        Info E-mail: info@zagroo.tech
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Company</h6>
                <ul class="ftr-details-sub">
                  <li>
                    <Link to={"/services"}>Services</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/caseStudies"}>Case Studies</Link>
                  </li>
                  <li>
                    <Link to={"/landing"}>About us</Link>
                  </li>

                  <li>
                    <Link to={"/contact"}>Contact us</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Services</h6>
                <ul class="ftr-links-sub">
                  <h1 className="footer-service-title">Software Development</h1>
                  <li>
                    <a href="/" rel="nofollow">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="nofollow">
                      Mobile App Development
                    </a>
                  </li>
                </ul>
                <ul class="ftr-links-sub">
                  <h1 className="footer-service-title">ML Readiness</h1>
                  <li>
                    <a href="/" rel="nofollow">
                      Data Enrichment
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="nofollow">
                      Data Augmentation
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="nofollow">
                      Data Strategy
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="nofollow">
                      Exploratory Data Analysis
                    </a>
                  </li>
                </ul>
                <ul class="ftr-links-sub">
                  <h1 className="footer-service-title">
                    Cloud Infrastructure for ML
                  </h1>
                  <li>
                    <a href="/" rel="nofollow">
                      Data Pipelines
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="nofollow">
                      Data Platform for ML
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="nofollow">
                      Cloud Architecture for ML
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-email">
              <h6 class="ftr-hdr">Subscribe to our Newsletter</h6>
              <div id="ftr-email" class="ftr-email-form">
                <form id="ftrEmailForm" method="post" action="/">
                  <div class="error">Please enter a valid email address</div>
                  <input
                    type="text"
                    name="email_address_"
                    id="ftrEmailInput"
                    class="input"
                    placeholder="Enter your email"
                  />

                  <input type="submit" class="button" value="SUBMIT" />
                </form>
              </div>
            </div>
            <div class="footer-social">
              <h6 class="ftr-hdr">Follow us</h6>
              <ul>
                <li>
                  <a href="https://www.facebook.com/zagroo.tech">
                    <button
                      className="bg-lightBlue-800 text-white w-8 h-8  rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/zagroo/">
                    <button
                      className="bg-lightBlue-400 text-white w-8 h-8  rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-linkedin"></i>
                    </button>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <button
                      className="bg-pink-500 text-white w-8 h-8  rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-instagram"></i>
                    </button>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <button
                      className="bg-lightBlue-600 text-white w-8 h-8  rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer-legal">
              <p>&copy; Zagroo 2022. All Rights Reserved. </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
