import {
  IoSearchOutline,
  IoPersonOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";

const Mheader = () => {
  return (
    <>
      <div className=" border-b sm:py-3 z-10">
        <div className="flex flex-col sm:flex-row w-11/12 mx-auto justify-between items-center sm:gap-20">
          <a href="#" className="header-logo m-3">
            <p className="logo text-3xl font-extrabold">ShopEg</p>
          </a>

          <div className="header-search-container my-5 sm:my-0 border rounded-md flex justify-between items-center px-4 grow z-10">
            <input
              type="search"
              name="search"
              className="search-field sm:min-w-72 py-2.5 outline-none border-none "
              placeholder="Enter your product name..."
            />

            <button className="search-btn">
              <IoSearchOutline />
            </button>
          </div>

          <div className="header-user-actions  items-center hidden lg:flex">
            <button className="action-btn flex items-center w-10 p-1">
              <IoPersonOutline className="w-full h-full"/>
            </button>

            <button className="action-btn flex items-center w-11 p-2 relative">
              <IoHeartOutline className="w-full h-full"/>
              <span className="count absolute -top-1 -right-1.5 bg-red-500 text-white rounded-full size-5 flex items-center justify-center">0</span>
            </button>

            <button className="action-btn flex items-center w-11 p-2 relative">
              <BiShoppingBag className="w-full h-full"/>
              <span className="count absolute -top-1 -right-0.5 bg-red-500 text-white rounded-full size-5 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mheader;
