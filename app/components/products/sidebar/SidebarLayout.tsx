import React from "react";
import CategoriesComponent from "./Categories";
import BestSellersComponent from "./BestSellers";

export interface Category {
  icon: string;
  title: string;
  submenu: { name: string; stock: string }[];
}
export interface Product {
  imgSrc: string;
  alt: string;
  title: string;
  price: string;
  originalPrice: string;
}

const SidebarComponent: React.FC = () => {
  const categories: Category[] = [
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
  const products: Product[] = [
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
    <div className="sidebar has-scrollbar w-1/4 sticky top-0 h-fit text-nowrap">
      <CategoriesComponent categories={categories} />
      <BestSellersComponent products={products} />
    </div>
  );
};

export default SidebarComponent;
