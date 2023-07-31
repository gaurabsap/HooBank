import React from "react";
import air from "../assets/air.png";
import coinbase from "../assets/coinbase.png";
import binance from "../assets/binance.png";
import drop from "../assets/drop.png";
const Service = () => {
  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center gap-20">
        <div className="w-screen flex items-center justify-evenly p-4">
          <img className="w-[10%]" src={air} alt="airbnb" />
          <img className="w-[10%]" src={binance} alt="binance" />
          <img className="w-[10%]" src={coinbase} alt="coinbase" />
          <img className="w-[10%]" src={drop} alt="dropbox" />
        </div>
        <div className="p-10 flex justify-around items-center  service">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-5xl">Let’s try our service now!</h1>
            <p className="w-[55%] discount">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <button className="text-black start p-2">Get started</button>
        </div>
      </div>
    </>
  );
};

export default Service;
