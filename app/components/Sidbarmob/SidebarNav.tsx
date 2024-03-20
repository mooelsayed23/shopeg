"use client";
import React from "react";
import Navbar from "../headers/Navbar";
import { IoCaretBackOutline } from "react-icons/io5";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import { useDispatch } from "react-redux";
import { toggleMobNav } from "@/app/datastore/showAsideSlice";

const SidebarNav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="fixed left-0 top-0 z-50 bg-white border-r w-64 h-screen lg:hidden">
        <div className="menu-top flex justify-between items-center m-5 mb-0 pb-5 border-b">
          <h2 className="menu-title text-red-500 font-black text-xl">Menu</h2>

          <button
            className="menu-close-btn"
            onClick={() => dispatch(toggleMobNav())}
          >
            X
          </button>
        </div>
        {/*  */}
        <Navbar hide />
        {/*  */}

        <div className="menu-bottom mx-5">
          <ul className="menu-category-list">
            <li className="menu-category border-b-0">
              <button
                className="accordion-menu flex justify-between w-full"
                data-accordion-btn=""
              >
                <p className="menu-title">Language</p>
                <IoCaretBackOutline />
              </button>

              <ul className="submenu-category-list" data-accordion="">
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    English
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Español
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Frençh
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category border-b-0">
              <button
                className="accordion-menu flex justify-between w-full"
                data-accordion-btn=""
              >
                <p className="menu-title">Currency</p>
                <IoCaretBackOutline />
              </button>

              <ul className="submenu-category-list" data-accordion="">
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    USD $
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    EUR €
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-social-container flex justify-evenly items-center">
            <li className="social-link p-1 bg-gray-300">
              <a href="#" className="social-link ">
                <PiFacebookLogo className="size-7" />
              </a>
            </li>

            <li className="social-link p-1 bg-gray-300">
              <a href="#" className="social-link">
                <PiTwitterLogo className="size-7" />
              </a>
            </li>

            <li className="social-link p-1 bg-gray-300">
              <a href="#" className="social-link">
                <PiInstagramLogo className="size-7" />
              </a>
            </li>

            <li className="social-link p-1 bg-gray-300">
              <a href="#" className="social-link">
                <PiLinkedinLogo className="size-7" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="fixed w-full h-full top-0 left-0 bg-gray-300 bg-opacity-50 z-40 "
        onClick={() => dispatch(toggleMobNav())}
      ></div>
    </>
  );
};

export default SidebarNav;
