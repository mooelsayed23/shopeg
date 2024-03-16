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
    <div className="mx-auto">
      <div className="m-auto w-11/12 ">
        <Carousel rightControl=" " leftControl=" ">
          {banners.map((banner, index) => (
            <div
              className="relative h-[450px] aspect-w-auto aspect-h-auto rounded overflow-hidden"
              key={index}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                className="banner-img object-cover object-right p-0 m-0 block w-full h-full"
                width={1500}
                height={500}
                priority={true}
              />
              <div className="banner-content absolute top-1/2 left-20 -translate-y-1/2">
                <p className="banner-subtitle">{banner.subtitle}</p>
                <h2 className="banner-title">{banner.title}</h2>
                <p className="banner-text">{banner.text}</p>
                <a href="#" className="banner-btn">
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
