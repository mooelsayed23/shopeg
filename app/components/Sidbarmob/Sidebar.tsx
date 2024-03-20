import React from "react";
import SidebarLayout from "../products/sidebar/SidebarLayout";
import { togglemobsidebar } from "@/app/datastore/showAsideSlice";
import { useDispatch } from "react-redux";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="fixed left-0 top-0 w-72 p-3 text-sm z-50 h-fit bg-white overflow-y-scroll border-r">
        <SidebarLayout />
      </div>
      <div
        className="fixed w-full h-full top-0 left-0 bg-gray-300 bg-opacity-50 z-40 "
        onClick={() => dispatch(togglemobsidebar())}
      ></div>
    </>
  );
};

export default Sidebar;
