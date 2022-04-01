import React, { useState } from "react";
import data from "../data/HomeData";
import "../Cards/CardStyle/HomeCard.css";
import "../../assets/styles/Blog.css";

const HomeCard = () => {
  const [items] = useState(data);
  return (
    <>
      <div className="blog-body">
        <div className="arrow-point ">
          <div>
            <h1 className="mt-2 text-blueGray-600">Learn</h1>
          </div>
        </div>
        {/* my main items section  */}
        <div className="blog-card">
          {items.map((elem) => {
            const { title, image, link, title2, details } = elem;

            return (
              <div class="main-card">
                <div class="card-header1">
                  <img src={image} alt="" />
                </div>
                <div class="card-body-blog">
                  <span class="tag tag-teal">{title}</span>
                  <br />
                  <br />
                  <a
                    href={link}
                    class="card-text-body text-center text-bold font-bold"
                  >
                    {title2}
                  </a>
                  <p className="">{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeCard;
