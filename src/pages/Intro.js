import "../styles/intro.css";
import { inter } from "../data/inter";

const Intro = () => {
  return (
    <div className="intro">
      {inter.map((enter, res) => {
        return (
          <div key={res} className="intro-box">
            <div className="intro-content">
              <h1>{enter.say}</h1>
              <p>{enter.hear}</p>
            </div>
            <div className="intro-list">
              <div className="intro-item">
                <div className="intro-images">
                  <img className="img1" src={enter.img} alt="img" />
                </div>
                <p>{enter.my}</p>
                <h5>{enter.numbers}</h5>
                <h2>{enter.name}</h2>
              </div>
              <div className="intro-item1">
                <div className="intro-images">
                  <img className="img1" src={enter.image} alt="img" />
                </div>
                <p>{enter.women}</p>
                <h5>{enter.numbers}</h5>
                <h2>{enter.gender}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Intro;
