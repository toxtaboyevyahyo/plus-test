import "../styles/services.css";
import { servis } from "../data/servis";

const Services = () => {
  return (
    <div>
      {servis.map((ser, idp) => {
        return (
          <div key={idp} className="services-box">
            <div>
              <img src={ser.img} alt="img" />
            </div>
            <div className="services-content">
              <h1>{ser.spec}</h1>
              <p>{ser.with}</p>
              <p>{ser.short}</p>
              <button className="services-btn">{ser.nows}</button>
              <button className="services-btn1">{ser.more}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
