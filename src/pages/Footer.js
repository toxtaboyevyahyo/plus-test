import { foot } from "../data/foot";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {foot.map((fint, fball) => {
        return (
          <div key={fball}>
            <div className="footer-flex">
              <div className="footer-list">
                <h1>{fint.verse}</h1>
                <p className="footer-text">{fint.get}</p>
                <div className="images-flex">
                  <div className="block">
                    <img className="img-radius" src={fint.img} alt="img" />
                  </div>
                  <div className="block">
                    <img className="img-radius" src={fint.imgs} alt="img" />
                  </div>
                  <div className="block">
                    <img className="img-radius" src={fint.images} alt="img" />
                  </div>
                </div>
              </div>
              <div className="footer-list">
                <h1>{fint.duct}</h1>
                <p>{fint.chuck}</p>
                <p>{fint.run}</p>
                <p>{fint.tri}</p>
                <p>{fint.sta}</p>
                <p>{fint.lift}</p>
                <p>{fint.cx}</p>
              </div>
              <div className="footer-list">
                <h1>{fint.help}</h1>
                <p>{fint.abt}</p>
                <p>{fint.faqs}</p>
                <p>{fint.it}</p>
                <p>{fint.policy}</p>
                <p>{fint.pyme}</p>
              </div>
              <div className="footer-list">
                <h1>{fint.touch}</h1>
                <p>{fint.custom}</p>
                <p>{fint.tel}</p>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-left">
                <p className="p">{fint.reserved}</p>
              </div>
              <div className="footer-right">
                <p className="p">{fint.terms}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
