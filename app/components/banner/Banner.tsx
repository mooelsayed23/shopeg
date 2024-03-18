import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const banners = [
  {
    src: "/assets/images/banner-1.jpg",
    alt: "women's latest fashion sale",
    subtitle: "Trending item",
    title: "Women's latest fashion sale",
    text: "starting at $ 20.00",
    btnText: "Shop now",
  },
  {
    src: "/assets/images/banner-2.jpg",
    alt: "modern sunglasses",
    subtitle: "Trending accessories",
    title: "Modern sunglasses",
    text: "starting at $ 15.00",
    btnText: "Shop now",
  },
  {
    src: "/assets/images/banner-3.jpg",
    alt: "new fashion summer sale",
    subtitle: "Sale Offer",
    title: "New fashion summer sale",
    text: "starting at $ 29.99",
    btnText: "Shop now",
  },
];

const Banner = () => {
  return (
    <div className="mx-auto overflow-hidden">
      <div className="m-auto w-11/12 ">
        <Carousel rightControl=" " leftControl=" ">
          {banners.map((banner, index) => (
            <div
              className="relative min-w-full max-h-[450px] aspect-square rounded overflow-hidden"
              key={index}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                className=" object-cover object-right-top w-full h-full p-0 m-0 block"
                width={1500}
                height={500}
                priority={true}
              />
              <div
                className="banner-content absolute bottom-6 left-6
               bg-white sm:bg-transparent opacity-75 py-5 px-6 max-w-[400px]"
              >
                <p className="banner-subtitle text-red-400 text-lg">{banner.subtitle}</p>
                <h2 className="banner-title font-extrabold text-lg sm:text-3xl mb-2 font-sans">{banner.title}</h2>
                <p className="banner-text text-xl font-semibold hidden sm:block my-5 text-gray-600 font-serif">{banner.text}</p>
                <a href="#" className="banner-btn bg-red-400 text-white p-1 rounded-md ">
                  {banner.btnText}
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
