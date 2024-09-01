import "../styles/customer.css";
import { custom } from "../data/custom";

const Customer = () => {
  return (
    <div>
      {custom.map((cust, indexs) => {
        return (
          <div className="customer">
            <div className="customer-content">
              <h1>{cust.super}</h1>
              <p>{cust.style}</p>
              <p>{cust.our}</p>
              <button>{cust.butt}</button>
            </div>
            <div>
              <img src={cust.image} alt="img" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Customer;
