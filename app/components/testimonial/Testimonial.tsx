import Image from "next/image";
import React from "react";
import "./testimonial.scss";
import { IoArrowUndoOutline, IoBoatOutline, IoCallOutline, IoRocketOutline, IoTicketOutline } from "react-icons/io5";

const Testimonial = () => {
  return (
    <>
      <div className="my-12">
        <div className="container mx-auto">
          <div className="testimonials-box flex mx-auto w-11/12 justify-between">
            <div className="testimonial w-1/4 ">
              <h2 className="title font-semibold text-lg border-b pb-2.5 mb-7">testimonial</h2>

              <div className="testimonial-card border  text-center  p-8">
                <Image
                  src="/assets/images/testimonial-1.jpg"
                  alt="alan doe"
                  className="testimonial-banner rounded-full mx-auto"
                  width="80"
                  height="80"
                />

                <p className="testimonial-name my-4 font-bold text-lg text-zinc-500">Alan Doe</p>

                <p className="testimonial-title">CEO &amp; Founder Invision</p>

                <Image
                  src="./assets/images/icons/quotes.svg"
                  alt="quotation"
                  className="quotation-img mx-auto my-5"
                  width="26"
                  height="26"
                />

                <p className="testimonial-desc w-1/2 mx-auto">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet.
                </p>
              </div>
            </div>

            <div className="cta-container relative w-2/4">
              <img
                src="./assets/images/cta-banner.jpg"
                alt="summer collection"
                className="cta-banner w-full"
              />

              <a
                href="#"
                className="w-1/2 h-1/2 p-5 items-center justify-center flex flex-col text-center absolute z-10 top-1/2 left-1/2 bg-white opacity-80 -translate-x-1/2 -translate-y-1/2"
              >
                <p className="discount w-1/2 mx-auto font-extrabold text-xl bg-black p-1 text-white">25% Discount</p>

                <h2 className="cta-title text-4xl font-semibold my-2">Summer collection</h2>

                <p className="cta-text font-medium text-lg mb-1">Starting @ $10</p>

                <button className="cta-btn font-extrabold opacity-80 text-2xl">Shop now</button>
              </a>
            </div>

            <div className="service 1/4  ">
              <h2 className="title font-semibold text-lg border-b pb-2.5 mb-7">Our Services</h2>

              <div className="service-container border ">
                <a href="#" className="service-item">
                  <div className="service-icon">                   
                    <IoBoatOutline/>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Worldwide Delivery</h3>
                    <p className="service-desc">For Order Over $100</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IoRocketOutline/>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Next Day delivery</h3>
                    <p className="service-desc">UK Orders Only</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IoCallOutline/>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Best Online Support</h3>
                    <p className="service-desc">Hours: 8AM - 11PM</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                  <IoArrowUndoOutline/>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Return Policy</h3>
                    <p className="service-desc">Easy &amp; Free Return</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                  <IoTicketOutline/>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">30% money back</h3>
                    <p className="service-desc">For Order Over $100</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
