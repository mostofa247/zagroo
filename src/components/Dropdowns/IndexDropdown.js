import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/nav-items.css";

const IndexDropdown = () => {
  return (
    <>
      <Link to="/landing" className="nav-items mr-auto">
        About us
      </Link>
      <Link to="/services" className="nav-items mr-auto">
        Services
      </Link>

      <Link to="/blog" className="nav-items mr-auto">
        Blog
      </Link>
      <Link to="/caseStudies" className="nav-items  mr-auto">
        Case studies
      </Link>
      <br />
      <Link to="/contact" className="nav-items-button mr-auto">
        Let's Talk
      </Link>
    </>
  );
};

export default IndexDropdown;

//text-bold py-4 px-4 font-normal  block w-full whitespace-nowrap
