import { update } from "../data/update";
import "../styles/updates.css";

const Updates = () => {
  return (
    <div className="updata">
      {update.map((data, day) => {
        return (
          <div key={day} className="updata-box">
            <div className="updata-content">
              <h1>{data.sign}</h1>
            </div>
            <div className="updata-input">
              <label>
                <input type="text" placeholder={data.input} />
                <button className="updata-btn">{data.btn}</button>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
