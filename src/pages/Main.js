import React from "react";
import "../styles/main.css";
import { mains } from "../data/mains";
import { useState } from "react";

const Main = () => {
  const [couresel, setCauresel] = useState(
    "https://outmaxshop.ru/images/Pro-advert_Nike_Air_Force_model_displayed_as_the_central_focus__98fa5f79-3c08-4276-9b99-fb0f5dbb35cb.png"
  );


const handImg = ()=> {
  setCauresel("https://media.wired.com/photos/63728604691ed08cc4b98976/16:9/w_2095,h_1178,c_limit/Nike-Swoosh-News-Gear.jpg")
}

const handValue = () => {
  setCauresel("https://www.mimanerashop.com/images/nike-customizzata-comics-gialla-arancio-sneakers-d.1200x1200.10465.webp")
}

const handImages = () => {
    setCauresel("https://myreact.ru/wp-content/uploads/2024/04/air-max-dn-%E5%A5%B3%E5%AD%90%E8%BF%90%E5%8A%A8%E9%9E%8B-wns3s9.png")
}

  return (
    <div>
      {mains.map((item, ind) => {
        return (
          <div key={ind} className="main">
            <div className="main-content">
              <div>
                <h3 className="main-title">{item.our}</h3>
                <h1 className="main-subtitle">{item.new}</h1>
                <h1 className="main-cont">{item.cont}</h1>
                <p className="main-text">{item.discover}</p>
                <button className="main-btn">{item.btn}</button>
              </div>
              <div className="main-images">
                <div className="main-midl">
                  <img className="main-img1" src={couresel} alt="" />
                </div>
                <div className="main-flex">
                  <div className="main-block">
                    <img onClick={handImg} className="main-img2" src={item.url} alt="img" />
                  </div>
                  <div className="main-block">
                    <img onClick={handValue} className="main-img2" src={item.urlImg} alt="img" />
                  </div>
                  <div className="main-block">
                    <img onClick={handImages} className="main-img2" src={item.urlImage} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="span-group">
              <span className="span">{item.buy}</span>
              <span className="span">{item.by}</span>
              <span className="span">{item.ky}</span>
            </div>

            <div className="span-group">
              <span>{item.brnd}</span>
              <span>{item.shop}</span>
              <span>{item.custom}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
