import React from "react";
import "../styles/header.css";
import { head } from "../data/head";

const Header = () => {
  return (
    <div>
      {head.map((value, index) => {
        return (
          <div key={index} className="header">
            <div className="header-box">
              <h1 className="title">{value.conv}</h1>
            </div>
            <div className="header-content">
              <span>{value.home}</span>
              <span>{value.about}</span>
              <span>{value.product}</span>
              <span>{value.contact}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
