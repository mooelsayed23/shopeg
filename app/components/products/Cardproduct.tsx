import Image from "next/image";
import React from "react";
interface CardProductProps {
  src: string;
  title: string;
  category: string;
  price: string;
  oldPrice: string;
}
const Cardproduct: React.FC<CardProductProps> = ({
  src,
  title,
  category,
  price,
  oldPrice,
}) => {
  return (
    <>
      <div className="showcase flex border rounded-md mb-5 py-3 w-[300px]">
        <a href="#" className="showcase-img-box">
          <Image
            src={src}
            alt="relaxed short full sleeve t-shirt"
            width="70"
            height="70"
            className="p-1" 
          />
        </a>

        <div className="showcase-content overflow-hidden text-ellipsis">
          <a href="#">
            <h4 className="showcase-title text-nowrap overflow-hidden text-ellipsis font-bold">{title}</h4>
          </a>

          <a href="#" className="showcase-category">
            {category}
          </a>

          <div className="price-box flex gap-3">
            <p className="price font-bold text-red-500">$ {price},00</p>
            <del className="font-light text-sm">$ {oldPrice},00</del>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardproduct;
