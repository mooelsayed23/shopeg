"use client";
import React, { useState } from "react";
import {
  IoBagAddOutline,
  IoEyeOutline,
  IoHeartOutline,
  IoRepeatOutline,
  IoStarOutline,
} from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";

const Prodmain = () => {
    const [ishover,setishover]=useState(999);
  const products = [
    {
      name: "Mens Winter Leathers Jackets",
      category: "jacket",
      price: "$48.00",
      discounted_price: "$75.00",
      rating: 3,
      image_url1: "./assets/images/products/jacket-3.jpg",
      image_url2: "./assets/images/products/jacket-4.jpg",
    },
    {
      name: "Pure Garment Dyed Cotton Shirt",
      category: "shirt",
      price: "$45.00",
      discounted_price: "$56.00",
      rating: 3,
      image_url1: "./assets/images/products/shirt-1.jpg",
      image_url2: "./assets/images/products/shirt-2.jpg",
    },
    {
      name: "MEN Yarn Fleece Full-Zip Jacket",
      category: "jacket",
      price: "$58.00",
      discounted_price: "$65.00",
      rating: 3,
      image_url1: "./assets/images/products/jacket-5.jpg",
      image_url2: "./assets/images/products/jacket-6.jpg",
    },
    {
      name: "Black Floral Wrap Midi Skirt",
      category: "skirt",
      price: "$25.00",
      discounted_price: "$35.00",
      rating: 5,
      image_url1: "./assets/images/products/clothes-3.jpg",
      image_url2: "./assets/images/products/clothes-4.jpg",
    },
    {
      name: "Casual Men's Brown shoes",
      category: "casual",
      price: "$99.00",
      discounted_price: "$105.00",
      rating: 5,
      image_url1: "./assets/images/products/shoe-2.jpg",
      image_url2: "./assets/images/products/shoe-3.jpg",
    },
    {
      name: "Pocket Watch Leather Pouch",
      category: "watches",
      price: "$150.00",
      discounted_price: "$170.00",
      rating: 3,
      image_url1: "./assets/images/products/watch-3.jpg",
      image_url2: "./assets/images/products/watch-4.jpg",
    },
    {
      name: "Smart watche Vital Plus",
      category: "watches",
      price: "$100.00",
      discounted_price: "$120.00",
      rating: 4,
      image_url1: "./assets/images/products/watch-1.jpg",
      image_url2: "./assets/images/products/watch-2.jpg",
    },
    {
      name: "Womens Party Wear Shoes",
      category: "party wear",
      price: "$25.00",
      discounted_price: "$30.00",
      rating: 3,
      image_url1: "./assets/images/products/party-wear-1.jpg",
      image_url2: "./assets/images/products/party-wear-2.jpg",
    },
    {
      name: "Mens Winter Leathers Jackets",
      category: "jacket",
      price: "$32.00",
      discounted_price: "$45.00",
      rating: 4,
      image_url1: "./assets/images/products/jacket-1.jpg",
      image_url2: "./assets/images/products/jacket-2.jpg",
    },
    {
      name: "Trekking & Running Shoes - black",
      category: "sports",
      price: "$58.00",
      discounted_price: "$64.00",
      rating: 3,
      image_url1: "./assets/images/products/sports-2.jpg",
      image_url2: "./assets/images/products/sports-3.jpg",
    },
    {
      name: "Men's Leather Formal Wear shoes",
      category: "formal",
      price: "$50.00",
      discounted_price: "$65.00",
      rating: 4,
      image_url1: "./assets/images/products/shoe-1.jpg",
      image_url2: "./assets/images/products/shoe-4.jpg",
    },
    {
      name: "Better Basics French Terry Sweatshorts",
      category: "shorts",
      price: "$78.00",
      discounted_price: "$85.00",
      rating: 3,
      image_url1: "./assets/images/products/shorts-1.jpg",
      image_url2: "./assets/images/products/shorts-2.jpg",
    },
  ];

  return (
    <div className="columns-2">
      {products.map((item, index) => (
        <div className="product-card relative " key={index}>
          <div className="product-images relative border">
            <img
              src={item.image_url1}
              alt={item.name}
              width="300"
              className="product-img default relative z-10 w-full h-full object-cover"
            />
            <img
              src={item.image_url2}
              alt={item.name}
              width="300"
              className={`product-img hover absolute top-0 z-20 opacity-0 hover:opacity-100 w-full h-full object-cover`}
              onMouseEnter={()=>setishover(index)}
              onMouseLeave={()=>setishover(999)}
            />

            <p className="showcase-badge absolute top-0 left-0 z-30">SALE</p>

            <div className={`showcase-actions absolute right-0 top-0  flex flex-col group ${ishover === index ? "z-50": "z-0"}`}>
              <button className="btn-action border rounded-lg p-2">
                <IoHeartOutline />
              </button>

              <button className="btn-action border rounded-lg p-2">
                <IoEyeOutline />
              </button>

              <button className="btn-action border rounded-lg p-2">
                <IoRepeatOutline />
              </button>

              <button className="btn-action border rounded-lg p-2">
                <IoBagAddOutline />
              </button>
            </div>
          </div>

          <div className="showcase-content absolute bottom-0 left-0 z-40">
            <a href="#" className="showcase-category">
              {item.category}
            </a>

            <a href="#">
              <h3 className="showcase-title">{item.name}</h3>
            </a>

            <div className="showcase-rating flex">
              {[...Array(item.rating)].map((_, i) => (
                <LiaStarSolid key={i} />
              ))}
              {[...Array(5 - item.rating)].map((_, i) => (
                <IoStarOutline key={i} />
              ))}
            </div>

            <div className="price-box">
              <p className="price">{item.price}</p>
              <del>{item.discounted_price}</del>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prodmain;