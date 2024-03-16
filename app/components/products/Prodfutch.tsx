import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

const products = [
  {
    name: "Shampoo, Conditioner & Facewash Packs",
    price: 150.0,
    oldPrice: 200.0,
    image: "/assets/images/products/shampoo.jpg",
    sold: 20,
    available: 40,
  },
  {
    name: "Rose Gold Diamonds Earring",
    price: 1990.0,
    oldPrice: 2000.0,
    image: "/assets/images/products/jewellery-1.jpg",
    sold: 15,
    available: 40,
  },
];

const Prodfutch = () => {
  return (
    <>
      <div className="product-featured border p-4 m-4">
        <h2 className="title">Deal of the day</h2>

        <div className="showcase-wrapper has-scrollbar h-96 p-1">
        <Carousel rightControl=" " leftControl=" ">
          {products.map((product, index) => (
            <div className="showcase-container min-w-full" key={index}>
              <div className="showcase flex">
                <div className="showcase-banner">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="showcase-img"
                    width={600}
                    height={500}
                  />
                </div>

                <div className="showcase-content">
                  <a href="#">
                    <h3 className="showcase-title">{product.name}</h3>
                  </a>

                  <p className="showcase-desc">
                    Lorem ipsum dolor sit amet consectetur 
                  </p>

                  <div className="price-box">
                    <p className="price">${product.price.toFixed(2)}</p>

                    <del>${product.oldPrice.toFixed(2)}</del>
                  </div>

                  <button className="add-cart-btn">add to cart</button>

                  <div className="showcase-status">
                    <div className="wrapper">
                      <p>
                        already sold: <b>{product.sold}</b>
                      </p>

                      <p>
                        available: <b>{product.available}</b>
                      </p>
                    </div>

                    <div className="showcase-status-bar"></div>
                  </div>

                  <div className="countdown-box">
                    <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                    <div className="countdown flex">
                      <div className="countdown-content  bg-slate-400 px-2 py-3 m-auto text-center">
                        <p className="display-number font-bold">360</p>

                        <p className="display-text text-xs">Days</p>
                      </div>

                      <div className="countdown-content  bg-slate-400 px-2 py-3 m-auto text-center">
                        <p className="display-number font-bold">24</p>
                        <p className="display-text text-xs">Hours</p>
                      </div>

                      <div className="countdown-content  bg-slate-400 px-2 py-3 m-auto text-center">
                        <p className="display-number font-bold">59</p>
                        <p className="display-text text-xs">Min</p>
                      </div>

                      <div className="countdown-content  bg-slate-400 px-2 py-3 m-auto text-center">
                        <p className="display-number font-bold">00</p>
                        <p className="display-text text-xs">Sec</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}</Carousel>
        </div>
      </div>
    </>
  );
};

export default Prodfutch;
