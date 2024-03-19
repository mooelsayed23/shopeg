import React from "react";

const Footerbuy = () => {
  return (
    <>
      <div className=" pt-5 mx-auto w-11/12 py-2 pb-16 lg:pb-2">
        <img
          src="./assets/images/payment.png"
          alt="payment method"
          className="payment-img mx-auto"
        />

        <p className="copyright mx-auto text-center mt-2">
          Copyright © <a href="#">Anon</a> all rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footerbuy;
