import React from "react";
import discount from "../assets/Discount.svg";
import hand from "../assets/hand.png";
import arrow from "../assets/arrow.svg";
import vector from "../assets/vector.svg";
const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[82vh] w-screen p-0">
        <div className="flex w-[40%] flex-col justify-end gap-6 relative">
          <p className="flex items-center gap-1 w-[60%] discount-bg rounded-md text-[15px]">
            <img src={discount} alt="discount" />
            20%<span className="discount">DISCOUNT FOR</span>1 MONTH
            <span className="discount">ACCOUNT</span>
          </p>
          <div className="flex flex-col gap-6">
            <span className="text-5xl font-bold">The Next</span>
            <span className="text-5xl ground font-bold">Generation</span>
            <span className="text-5xl font-bold">Payment Method.</span>
          </div>
          <p className="w-[75%] discount">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          <div className="w-[100px] h-[100px] rounded-full borders flex flex-col items-center justify-center absolute top-12 lg:right-[20%]">
            <span className="flex items-center started">
              Get <img src={arrow} alt="arrow" />
            </span>
            <span className="started">Started</span>
          </div>
          <div className="blurs1 absolute top-0 left-[-90px]"></div>
        </div>
        <div className="relative">
          <div className="w-[100px] h-[100px]">
            <img className="ml-10 w-[80%]" src={vector} alt="vector" />
          </div>
          <div className="relative">
            <img
              className="ml-10 w-[5%] absolute bottom-[40%] left-20"
              src={vector}
              alt="vector"
            />
            <img
              className="ml-10 w-[10%] absolute bottom-[60%] right-20"
              src={vector}
              alt="vector"
            />
            <img className="w-[90vh] relative" src={hand} alt="hand" />
            <div className="blurs absolute left-[35%] bottom-20"></div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-evenly">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl">3800+</h1>
          <p className="ground">USER ACTIVE</p>
        </div>
        <span className="w-[2px] h-[20px] border bg-white"></span>
        <div className="flex items-center gap-5">
          <h1 className="text-2xl">230+</h1>
          <p className="ground">TRUSTED BY COMPANY</p>
        </div>
        <span className="w-[2px] h-[20px] border bg-white"></span>
        <div className="flex items-center gap-5">
          <h1 className="text-2xl">$230M+</h1>
          <p className="ground">TRANSACTION</p>
        </div>
      </div>
    </>
  );
};

export default Home;
