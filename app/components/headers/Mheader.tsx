import {
  IoSearchOutline,
  IoPersonOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";

const Mheader = () => {
  return (
    <>
      <div className="header-main border-b sm:py-3 z-10">
        <div className="container flex flex-col sm:flex-row grow justify-evenly  items-center m-auto">
          <a href="#" className="header-logo m-3">
            <p className="logo text-3xl">ShopEg</p>
          </a>

          <div className="header-search-container border rounded-md flex items-center px-4  z-10">
            <input
              type="search"
              name="search"
              className="search-field grow sm:min-w-72 py-2.5 outline-none border-none "
              placeholder="Enter your product name..."
            />

            <button className="search-btn">
              <IoSearchOutline />
            </button>
          </div>

          <div className="header-user-actions  items-center hidden lg:flex">
            <button className="action-btn flex items-center">
              <IoPersonOutline />
            </button>

            <button className="action-btn flex items-center">
              <IoHeartOutline />
              <span className="count">0</span>
            </button>

            <button className="action-btn flex items-center">
              <BiShoppingBag />
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mheader;
