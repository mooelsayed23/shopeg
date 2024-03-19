"use client";
import React, { useState } from "react";
import { IoRemoveOutline, IoAddOutline } from "react-icons/io5";
import Image from "next/image";
import { Category } from "./SidebarLayout";

interface Props {
  categories: Category[];
}

const CategoriesComponent: React.FC<Props> = ({ categories }) => {
  const [shownum, setShownum] = useState(90);

  const hShow = (index: number) => {
    setShownum((prevState) => (prevState === index ? 90 : index));
  };

  return (
    <div className="sidebar-category lg:border p-4 rounded-lg">
      <div className="sidebar-top flex justify-between items-center">
        <h2 className="sidebar-title mb-2">Category</h2>
        <div className=" pointer-events-auto font-semibold text-black">X</div>
      </div>

      <ul className="sidebar-menu-category-list transition">
        {categories.map((category, index) => (
          <li className="sidebar-menu-category py-1.5 " key={index}>
            <button
              className="sidebar-accordion-menu flex items-center justify-between w-full"
              data-accordion-btn=""
            >
              <div className="menu-title-flex flex justify-between gap-2 max-w-6 ">
                <Image
                  src={category.icon}
                  alt={category.title}
                  width={20}
                  height={20}
                  className=" w-auto h-5 object-cover"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <p className="menu-title">{category.title}</p>
              </div>
              <div onClick={() => hShow(index)}>
                {shownum === index ? <IoRemoveOutline /> : <IoAddOutline />}
              </div>
            </button>
            <ul
              className={`sidebar-submenu-category-list ${
                shownum === index ? " border-t mt-2 " : "hidden"
              }`}
              data-accordion=""
            >
              {category.submenu.map((item, idx) => (
                <li className="sidebar-submenu-category hover:bg-slate-50" key={idx}>
                  <a
                    href="#"
                    className="sidebar-submenu-title hover:text-black  flex justify-between items-center py-2 my-1 text-gray-500 text-sm"
                  >
                    <p className="product-name text-nowrap">{item.name}</p>
                    <data
                      value={item.stock}
                      className="stock"
                      title="Available Stock"
                    >
                      {item.stock}
                    </data>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesComponent;
