"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Product } from "./SidebarLayout";

interface Props {
  products: Product[];
}

const BestSellersComponent: React.FC<Props> = ({ products }) => {
  return (
    <div className="product-showcase">
      <h3 className="showcase-heading font-semibold tracking-wide my-2 text-lg text-gray-700">
        best sellers
      </h3>
      <div className="showcase-wrapper">
        <div className="showcase-container">
          {products.map((product, index) => (
            <div className="showcase flex gap-2.5 items-center" key={index}>
              <a href="#" className=" w-20 shrink-0">
                <Image
                  src={product.imgSrc}
                  alt={product.alt}
                  className="showcase-img p-1 shrink-0"
                  width="80"
                  height="80"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </a>
              <div className="showcase-content items-center">
                <a href="#" className="text-ellipsis overflow-hidden">
                  <h4 className="showcase-title text-nowrap tracking-wide text-sm ">
                    {product.title}
                  </h4>
                </a>
                <div className="flex text-yellow-400 text-xs my-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="price-box flex gap-4 items-center">
                  <del className="text-sm">{product.originalPrice}</del>
                  <p className="price font-semibold">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellersComponent;
