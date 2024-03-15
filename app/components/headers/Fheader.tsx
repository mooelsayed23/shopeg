import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Fheader = () => {
  return (
    <>
      <div className="header-top py-1 border-b hidden sm:flex">
        <div className="container flex justify-around items-center m-auto">
          <ul className="header-social-container hidden lg:flex items-center">
            <li>
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <FaXTwitter />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
            </li>
          </ul>

          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over - $50
            </p>
          </div>

          <div className="header-top-actions hidden md:flex">
            <select name="currency">
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
            </select>

            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="ar" className="text-right">العربية</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fheader;
