// import Image from 'next/image'
import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const Banner = () => {
  return (
    
    <div className="m-auto w-11/12 h-96">
      <Carousel rightControl=" " leftControl=" ">
        <div className="relative">
        <Image
            src="/assets/images/banner-1.jpg"
            alt="women's latest fashion sale"
            className="banner-img object-contain"
            width={1500}
            height={500}
          />
          <div className="banner-content absolute top-1/2 left-20 -translate-y-1/2">
            <p className="banner-subtitle">Trending item</p>
            <h2 className="banner-title">Women s latest fashion sale</h2>
            <p className="banner-text">starting at $ <b>20</b>.00</p>
            <a href="#" className="banner-btn">Shop now</a>
          </div>
        </div>
        <div className="relative">
        <Image
            src="/assets/images/banner-2.jpg"
            alt="modern sunglasses"
            className="banner-img object-contain"
            width={1500}
            height={500}
          />
          <div className="banner-content absolute top-1/2 left-20 -translate-y-1/2">
            <p className="banner-subtitle">Trending accessories</p>
            <h2 className="banner-title">Modern sunglasses</h2>
            <p className="banner-text">starting at $ <b>15</b>.00</p>
            <a href="#" className="banner-btn">Shop now</a>
          </div>
        </div>
        <div className="relative">
        <Image
            src="/assets/images/banner-3.jpg"
            alt="new fashion summer sale"
            className="banner-img object-contain"
            width={1500}
            height={500}
          />
          <div className="banner-content absolute top-1/2 left-20 -translate-y-1/2">
            <p className="banner-subtitle">Sale Offer</p>
            <h2 className="banner-title">New fashion summer sale</h2>
            <p className="banner-text">starting at $ <b>29</b>.99</p>
            <a href="#" className="banner-btn">Shop now</a>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
