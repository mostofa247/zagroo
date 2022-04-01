import React, { useState } from "react";
import Menu from "../data/data";
import "../../assets/styles/Blog.css";

const BlogCard = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };
  return (
    <div className="blog-body">
      <div className="blog-button-all">
        <button
          className="btn blog-button-items"
          onClick={() => setItems(Menu)}
        >
          All
        </button>
        <button
          className="btn blog-button-items"
          onClick={() => filterItem("Machine Learning")}
        >
          ML
        </button>
        <button
          className="btn blog-button-items"
          onClick={() => filterItem("Web App")}
        >
          Web App
        </button>
        <button
          className="btn blog-button-items"
          onClick={() => filterItem("App")}
        >
          Mobile App
        </button>
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
                <span class="tag tag-teal ">{title}</span>
                <br />
                <br />
                <a
                  href={link}
                  class="card-text-body text-center text-bold font-bold"
                >
                  {title2}
                </a>
                <br />
                <br />
                <a href={link} className="text-center">
                  {details}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCard;
