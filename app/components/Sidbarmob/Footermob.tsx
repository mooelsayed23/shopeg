"use client";
import { toggleMobNav, togglemobsidebar } from "@/app/datastore/showAsideSlice";
import React from "react";
import {
  IoBagOutline,
  IoGridOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { useDispatch } from "react-redux";

const Footermob = () => {
  
  const dispatch = useDispatch(); 
  return (
    <>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-md shadow-gray-500  rounded-t-lg flex justify-evenly w-full sm:w-2/3 md:w-1/2 lg:hidden lg:w-0 text-gray-800 p-3 z-50 items-center">
        <button
          className="action-btn size-8"
          onClick={() => dispatch(toggleMobNav())}
        >
          <IoMenuOutline className="size-full" />
        </button>

        <button className="action-btn size-8 relative p-1 ">
          <IoBagOutline className="size-full" />
          <span className="count absolute -top-1 -right-1 bg-red-500 text-white px-1 rounded-full text-xs">
            0
          </span>
        </button>

        <button className="action-btn size-6">
          <IoHomeOutline className="size-full" />
        </button>

        <button className="action-btn size-8 relative p-1">
          <IoHeartOutline className="size-full" />
          <span className="count absolute -top-1 -right-1.5 bg-red-500 text-white px-1 rounded-full text-xs">
            0
          </span>
        </button>

        <button className="action-btn size-6" onClick={() => dispatch(togglemobsidebar())}>
          <IoGridOutline className="size-full" />
        </button>
      </div>
    </>
  );
};

export default Footermob;
