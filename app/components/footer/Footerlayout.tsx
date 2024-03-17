import React from "react";
import Footercat from "./Footercat";
import Footernav from "./Footernav";
import Footerbuy from "./Footerbuy";

const Footerlayout = () => {
  return (
    <div className="pt-8 mt-12 bg-neutral-800 text-neutral-400">
      <Footercat />
      <Footernav />
      <Footerbuy/>
    </div>
  );
};

export default Footerlayout;
