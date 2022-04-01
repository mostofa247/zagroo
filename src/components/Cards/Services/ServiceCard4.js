import React, { useState } from "react";
import ServiceData from "components/data/ServiceData4";
import "../CardStyle/ServiceCard4.css";

const ServiceCard4 = () => {
  const [items] = useState(ServiceData);
  return (
    <div className="service-body ">
      <div className="full-card">
        {items.map((elem) => {
          const { title, details } = elem;

          return (
            <div class="card4">
              <div class="content">
                <h2 class="title">{title}</h2>
                <p class="copy">{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard4;
