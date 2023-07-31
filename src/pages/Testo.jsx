import React from "react";
import sets from "../assets/sets.png";
import kt from "../assets/1.png";
import kta from "../assets/2.png";
import kta2 from "../assets/3.png";

const Testo = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col gap-6">
              <span className="font-bold text-5xl">What people are</span>
              <span className="font-bold text-5xl">saying about us</span>
            </div>
            <p className="w-[30%] discount">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around gap-10 mt-32 relative">
          <div className="w-[300px] h-[350px] flex flex-col items-start p-5 justify-around testo">
            <img src={sets} alt="sets" />
            <p className="discount text-white text-[15px]">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>
            <div className="flex items-center justify-between gap-5">
              <img src={kt} alt="kt" />
              <div className="flex flex-col gap-1">
                <h1>Herman Jensen</h1>
                <p className="discount">Founder & Leader</p>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[350px] flex flex-col items-start p-5 justify-around">
            <img src={sets} alt="sets" />
            <p className="discount text-white text-[15px]">
              Money makes your life easier. If you're lucky to have it, you're
              lucky.
            </p>
            <div className="flex items-center justify-between gap-5">
              <img src={kta} alt="kt" />
              <div className="flex flex-col gap-1">
                <h1>Herman Jensen</h1>
                <p className="discount">Founder & Leader</p>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[350px] flex flex-col items-start p-5 justify-around">
            <img src={sets} alt="sets" />
            <p className="discount text-white text-[15px]">
              It is usually people in the money business, finance, and
              international trade that are really rich.
            </p>
            <div className="flex items-center justify-between gap-5">
              <img src={kta2} alt="kt" />
              <div className="flex flex-col gap-1">
                <h1>Herman Jensen</h1>
                <p className="discount">Founder & Leader</p>
              </div>
            </div>
          </div>
          <div className="testOverlay w-[200px] h-[400px] border absolute top-0 right-0"></div>
        </div>
      </div>
    </>
  );
};

export default Testo;
