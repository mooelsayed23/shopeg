"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCloseOutline, IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

const Psidbar = () => {
  const [shownum, setShownum] = useState(90);
  const hShow = (index: number) => {
    setShownum((prevState) => (prevState === index ? 90 : index));
  };
  const categories = [
    {
      icon: "/assets/images/icons/dress.svg",
      title: "Clothes",
      submenu: [
        { name: "Shirt", stock: "300" },
        { name: "Shorts & jeans", stock: "60" },
        { name: "Jacket", stock: "50" },
        { name: "Dress & frock", stock: "87" },
      ],
    },
    {
      icon: "/assets/images/icons/shoes.svg",
      title: "Footwear",
      submenu: [
        { name: "Sports", stock: "45" },
        { name: "Formal", stock: "75" },
        { name: "Casual", stock: "35" },
        { name: "Safety Shoes", stock: "26" },
      ],
    },
    {
      icon: "/assets/images/icons/jewelry.svg",
      title: "Jewelry",
      submenu: [
        { name: "Earrings", stock: "46" },
        { name: "Couple Rings", stock: "73" },
        { name: "Necklace", stock: "61" },
      ],
    },
    {
      icon: "/assets/images/icons/perfume.svg",
      title: "Perfume",
      submenu: [
        { name: "Clothes Perfume", stock: "12" },
        { name: "Deodorant", stock: "60" },
        { name: "Jacket", stock: "50" },
        { name: "Dress & frock", stock: "87" },
      ],
    },
    {
      icon: "/assets/images/icons/cosmetics.svg",
      title: "Cosmetics",
      submenu: [
        { name: "Shampoo", stock: "68" },
        { name: "Sunscreen", stock: "46" },
        { name: "Body Wash", stock: "79" },
        { name: "Makeup Kit", stock: "23" },
      ],
    },
    {
      icon: "/assets/images/icons/glasses.svg",
      title: "Glasses",
      submenu: [
        { name: "Sunglasses", stock: "50" },
        { name: "Lenses", stock: "48" },
      ],
    },
    {
      icon: "/assets/images/icons/bag.svg",
      title: "Bags",
      submenu: [
        { name: "Shopping Bag", stock: "62" },
        { name: "Gym Backpack", stock: "35" },
        { name: "Purse", stock: "80" },
        { name: "Wallet", stock: "75" },
      ],
    },
  ];
  const products = [
    {
      imgSrc: "/assets/images/products/1.jpg",
      alt: "baby fabric shoes",
      title: "baby fabric shoes",
      price: "$4.00",
      originalPrice: "$5.00",
    },
    {
      imgSrc: "/assets/images/products/2.jpg",
      alt: "men's hoodies t-shirt",
      title: "men's hoodies t-shirt",
      price: "$7.00",
      originalPrice: "$17.00",
    },
    {
      imgSrc: "/assets/images/products/3.jpg",
      alt: "girls t-shirt",
      title: "girls t-shirt",
      price: "$3.00",
      originalPrice: "$5.00",
    },
    {
      imgSrc: "/assets/images/products/4.jpg",
      alt: "woolen hat for men",
      title: "woolen hat for men",
      price: "$12.00",
      originalPrice: "$15.00",
    },
  ];
  return (
    <>
      <div className="sidebar has-scrollbar w-1/4 sticky top-0 h-fit text-nowrap">
        <div className="sidebar-category border p-4 rounded-lg">
          <div className="sidebar-top">
            <h2 className="sidebar-title mb-2.5">Category</h2>

            <button
              className="sidebar-close-btn flex sm:hidden "
              data-mobile-menu-close-btn=""
            >
              <IoCloseOutline />
            </button>
          </div>

          <ul className="sidebar-menu-category-list">
            {categories.map((category, index) => (
              <li className="sidebar-menu-category py-2" key={index}>
                <button
                  className="sidebar-accordion-menu flex items-center justify-between w-full"
                  data-accordion-btn=""
                >
                  <div className="menu-title-flex flex justify-between gap-2 max-w-6">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={20}
                      height={20}
                      className=" w-auto h-5 object-cover"
                      style={{
                        width: '100%',
                        height: 'auto',
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
                    shownum === index ? "" : "hidden"
                  }`}
                  data-accordion=""
                >
                  {category.submenu.map((item, idx) => (
                    <li className="sidebar-submenu-category" key={idx}>
                      <a href="#" className="sidebar-submenu-title">
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

        <div className="product-showcase">
          <h3 className="showcase-heading">best sellers</h3>

          <div className="showcase-wrapper">
            <div className="showcase-container">
              {products.map((product, index) => (
                <div className="showcase flex gap-1" key={index}>
                  <a href="#" className=" w-20 shrink-0">
                    <Image
                      src={product.imgSrc}
                      alt={product.alt}
                      className="showcase-img p-1 shrink-0"
                      width="75"
                      height="75"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title text-nowrap text-sm">{product.title}</h4>
                    </a>
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="price-box flex">
                      <del>{product.originalPrice}</del>
                      <p className="price">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Psidbar;
