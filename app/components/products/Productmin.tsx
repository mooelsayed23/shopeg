import React from "react";
import Cardproduct from "./Cardproduct";
import Prodfutch from "./Prodfutch";
import Prodmain from "./Prodmain";

const Productmin = () => {
  const newArrivalsG = [
    {
      name: "Relaxed Short full Sleeve T-Shirt",
      category: "Clothes",
      price: 45.0,
      oldPrice: 12.0,
      image: "/assets/images/products/clothes-1.jpg",
    },
    {
      name: "Girls Pink Embro Design Top",
      category: "Clothes",
      price: 61.0,
      oldPrice: 9.0,
      image: "/assets/images/products/clothes-2.jpg",
    },
    {
      name: "Black Floral Wrap Midi Skirt",
      category: "Clothes",
      price: 76.0,
      oldPrice: 25.0,
      image: "/assets/images/products/clothes-3.jpg",
    },
    {
      name: "Pure Garment Dyed Cotton Shirt",
      category: "Mens Fashion",
      price: 68.0,
      oldPrice: 31.0,
      image: "/assets/images/products/clothes-4.jpg",
    },
  ];
  const newArrivalsM = [
    // Additional products to make total 8
    {
      name: "MEN Yarn Fleece Full-Zip Jacket",
      category: "Winter wear",
      price: 61.0,
      oldPrice: 11.0,
      image: "/assets/images/products/jacket-1.jpg",
    },
    {
      name: "Mens Winter Leathers Jackets",
      category: "Winter wear",
      price: 32.0,
      oldPrice: 20.0,
      image: "/assets/images/products/jacket-2.jpg",
    },
    {
      name: "Mens Winter Leathers Jackets",
      category: "Jackets",
      price: 50.0,
      oldPrice: 25.0,
      image: "/assets/images/products/jacket-3.jpg",
    },
    {
      name: "Better Basics French Terry Sweatshorts",
      category: "Shorts",
      price: 20.0,
      oldPrice: 10.0,
      image: "/assets/images/products/jacket-4.jpg",
    },
  ];
  const trendingone = [
    {
      name: "Running & Trekking Shoes - White",
      category: "Sports",
      price: 49.0,
      oldPrice: 15.0,
      image: "/assets/images/products/sports-1.jpg",
    },
    {
      name: "Trekking & Running Shoes - black",
      category: "Sports",
      price: 78.0,
      oldPrice: 36.0,
      image: "/assets/images/products/sports-2.jpg",
    },
    {
      name: "Womens Party Wear Shoes",
      category: "Party wear",
      price: 94.0,
      oldPrice: 42.0,
      image: "/assets/images/products/party-wear-1.jpg",
    },
    {
      name: "Sports Claw Women's Shoes",
      category: "Sports",
      price: 54.0,
      oldPrice: 65.0,
      image: "/assets/images/products/sports-3.jpg",
    },
  ];
  const trendingtwo = [
    // Additional products to make total 8
    {
      name: "Air Trekking Shoes - white",
      category: "Sports",
      price: 52.0,
      oldPrice: 55.0,
      image: "/assets/images/products/sports-6.jpg",
    },
    {
      name: "Boot With Suede Detail",
      category: "boots",
      price: 20.0,
      oldPrice: 30.0,
      image: "/assets/images/products/shoe-3.jpg",
    },
    {
      name: "Men's Leather Formal Wear shoes",
      category: "formal",
      price: 56.0,
      oldPrice: 78.0,
      image: "/assets/images/products/shoe-1.jpg",
    },
    {
      name: "Casual Men's Brown shoes",
      category: "Casual",
      price: 50.0,
      oldPrice: 55.0,
      image: "/assets/images/products/shoe-2.jpg",
    },
  ];
  const topRatedone = [
    {
      name: "Pocket Watch Leather Pouch",
      category: "Watches",
      price: 50.0,
      oldPrice: 34.0,
      image: "/assets/images/products/watch-3.jpg",
    },
    {
      name: "Silver Deer Heart Necklace",
      category: "Jewellery",
      price: 84.0,
      oldPrice: 30.0,
      image: "/assets/images/products/jewellery-3.jpg",
    },
    {
      name: "Titan 100 Ml Womens Perfume",
      category: "Perfume",
      price: 42.0,
      oldPrice: 10.0,
      image: "/assets/images/products/perfume.jpg",
    },
    {
      name: "Men's Leather Reversible Belt",
      category: "Belt",
      price: 24.0,
      oldPrice: 10.0,
      image: "/assets/images/products/belt.jpg",
    },
  ];
  const topRatedtwo = [
    // Additional products to make total 8
    {
      name: "Platinum Zircon Classic Ring",
      category: "jewellery",
      price: 62.0,
      oldPrice: 65.0,
      image: "/assets/images/products/jewellery-2.jpg",
    },
    {
      name: "Smart Watche Vital Plus",
      category: "Watches",
      price: 56.0,
      oldPrice: 78.0,
      image: "/assets/images/products/watch-1.jpg",
    },
    {
      name: "Shampoo Conditioner Packs",
      category: "cosmetics",
      price: 20.0,
      oldPrice: 30.0,
      image: "/assets/images/products/shampoo.jpg",
    },
    {
      name: "Rose Gold Peacock Earrings",
      category: "jewellery",
      price: 20.0,
      oldPrice: 30.0,
      image: "/assets/images/products/jewellery-1.jpg",
    },
  ];

  return (
    <div className="mx-auto ps-10 w-3/4">
    <div className="flex gap-5 pe-10">
      <div className="w-1/3">
        <h2 className="title font-semibold text-lg border-b pb-2.5 mb-7 ">New Arrivals</h2>

        <div className="flex min-w-full gap-5 overflow-auto has-scrollbar flex-nowrap h-[490px] ">
          <div className="min-w-full">
            {newArrivalsG.map((item, index) => {
              return (
                <Cardproduct
                  src={item.image}
                  title={item.name}
                  category={item.category}
                  price={item.price.toString()}
                  oldPrice={item.oldPrice.toString()}
                  key={index}
                />
              );
            })}
          </div>
          <div className="min-w-full">
            {newArrivalsM.map((item, index) => {
              return (
                <Cardproduct
                  src={item.image}
                  title={item.name}
                  category={item.category}
                  price={item.price.toString()}
                  oldPrice={item.oldPrice.toString()}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-1/3">
        <h2 className="title font-semibold text-lg border-b pb-2.5 mb-7 ">Trending</h2>

        <div className="flex min-w-full gap-5 overflow-auto has-scrollbar flex-nowrap h-[490px] ">
          <div className="min-w-full">
            {trendingone.map((item, index) => {
              return (
                <Cardproduct
                  src={item.image}
                  title={item.name}
                  category={item.category}
                  price={item.price.toString()}
                  oldPrice={item.oldPrice.toString()}
                  key={index}
                />
              );
            })}
          </div>
          <div className="min-w-full">
            {trendingtwo.map((item, index) => {
              return (
                <Cardproduct
                  src={item.image}
                  title={item.name}
                  category={item.category}
                  price={item.price.toString()}
                  oldPrice={item.oldPrice.toString()}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-1/3">
        <h2 className="title font-semibold text-lg border-b pb-2.5 mb-7 ">Top Rated</h2>

        <div className="flex min-w-full gap-5 overflow-auto has-scrollbar flex-nowrap h-[490px] ">
          <div className="min-w-full">
            {topRatedone.map((item, index) => {
              return (
                <Cardproduct
                  src={item.image}
                  title={item.name}
                  category={item.category}
                  price={item.price.toString()}
                  oldPrice={item.oldPrice.toString()}
                  key={index}
                />
              );
            })}
          </div>
          <div className="min-w-full">
            {topRatedtwo.map((item, index) => {
              return (
                <Cardproduct
                  src={item.image}
                  title={item.name}
                  category={item.category}
                  price={item.price.toString()}
                  oldPrice={item.oldPrice.toString()}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      
    </div>
    <Prodfutch/>
    <Prodmain/>
    
    </div>
  );
};

export default Productmin;
