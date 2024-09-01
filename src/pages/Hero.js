import "../styles/hero.css";
import { her } from "../data/her";
import { useState } from "react";

const Hero = () => {
  const [res, setRes] = useState(
    "https://i5.walmartimages.com/seo/Nike-Women-s-Air-Max-Excee-Running-Shoes-White-Black-Pure-Platinum-8-US_8e74a4a3-f031-416b-bcdf-076ce79098ce_1.22284bc96d1de915cd33db7802ecf9de.jpeg"
  );

  const handUser = () => {
    setRes([
      "https://static.ftshp.digital/img/p/1/0/2/3/4/5/7/1023457-full_product.jpg",
    ]);
  };
  return (
    <div>
      {her.map((title, inds) => {
        return (
          <div key={inds}>
            <div className="hero-box">
              <h1>{title.popular}</h1>
              <p>{title.noutch}</p>
            </div>
            <div className="hero-list">
              <div className="hero-content">
                <img className="hero-img" src={title.img} alt="" />
                <h5>{title.kup}</h5>
                <h4>{title.taylor}</h4>
                <h3>{title.kupt}</h3>
              </div>
              <div className="hero-content">
                <img className="hero-img" src={title.imgs} alt="" />
                <h5>{title.kup}</h5>
                <h4>{title.star}</h4>
                <h3>{title.narx}</h3>
              </div>
              <div className="hero-content">
                <img className="hero-img" src={title.imge} alt="" />
                <h5>{title.kup}</h5>
                <h4>{title.taylor}</h4>
                <h3>{title.ins}</h3>
              </div>
              <div className="hero-content">
                <img onClick={handUser} className="hero-img" src={res} alt="" />
                <h5>{title.heart}</h5>
                <h4>{title.inst}</h4>
                <h3>{title.kupt}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
