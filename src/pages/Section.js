import React from "react";
import "../styles/section.css";
import { sect } from "../data/sect";

const Section = () => {
  return (
    <div>
      {sect.map((list, indeds) => {
        return (
          <div key={indeds} className="section-box">
            <div className="section-content">
              <img src={list.img} alt="img" />
              <h2>{list.free}</h2>
              <p>{list.text}</p>
            </div>
            <div className="section-content">
              <img src={list.image} alt="img" />
              <h2>{list.secury}</h2>
              <p>{list.texts}</p>
            </div>
            <div className="section-content">
              <img src={list.images} alt="img" />
              <h2>{list.love}</h2>
              <p>{list.teams}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
