import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Fheader = () => {
  return (
    <>
      <div className="header-top py-1 border-b hidden sm:flex">
        <div className="w-11/12 flex m-auto justify-between items-center">
          <ul className="header-social-container hidden lg:flex gap-2.5 items-center">
            <li className="p-1.5 rounded-md bg-neutral-300">
              <a href="#" className="social-link text-sm">
                <FaFacebook />
              </a>
            </li>

            <li className="p-1.5 rounded-md bg-neutral-300">
              <a href="#" className="social-link text-sm">
                <FaXTwitter />
              </a>
            </li>

            <li className="p-1.5 rounded-md bg-neutral-300">
              <a href="#" className="social-link text-sm">
                <FaInstagram />
              </a>
            </li>

            <li className="p-1.5 rounded-md bg-neutral-300">
              <a href="#" className="social-link text-sm">
                <FaLinkedin />
              </a>
            </li>
          </ul>

          <div className="header-alert-news font-light text-sm text-gray-400">
            <p>
              <b className="">Free Shipping</b>
              This Week Order Over - $50
            </p>
          </div>

          <div className="header-top-actions hidden md:flex">
            <select name="currency" className="border-0 focus:ring-0 p-2">
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
            </select>

            <select name="language" className="border-0 focus:ring-0 p-2">
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
