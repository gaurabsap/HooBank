import React from "react";
import ball from "../assets/first.png";
import love from "../assets/love.png";
import netflix from "../assets/netflix.png";
import vector from "../assets/Vector.png";
import green from "../assets/green.png";
import paypal from "../assets/paypal.png";
import tick from "../assets/tick.png";
import google from "../assets/google.png";
import app from "../assets/app.png";
const Trans = () => {
  return (
    <>
      <div className="mt-52 p-4 flex items-center justify-center gap-36">
        <div className="relative flex-1 flex justify-center">
          <div className="p-3 trans w-[350px] h-[300px] flex flex-col gap-5 text-center">
            <h1 className="font-semibold text-[20px]">Last Transaction</h1>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <img src={ball} alt="ball" />
                <div className="flex flex-col items-start">
                  <h1 className="font-bold">Dribbble Pro</h1>
                  <p className="discount">15 days ago</p>
                </div>
              </div>
              <div className="flex gap-2">
                <img src={love} alt="love" />
                <p>-$250,93</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="w-[50px] h-[50px] bg-white rounded-full flex items-start justify-center">
                  <img className="mt-3" src={netflix} alt="ball" />
                </div>
                <div className="flex flex-col items-start">
                  <h1>Netflix</h1>
                  <p className="discount">15 days ago</p>
                </div>
              </div>
              <div className="flex gap-2">
                <img src={love} alt="love" />
                <p>-$250,93</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="w-[50px] h-[50px] bg-white rounded-full flex items-start justify-center">
                  <img className="mt-4" src={vector} alt="ball" />
                </div>
                <div className="flex flex-col items-start">
                  <h1>Manulife Cash</h1>
                  <p className="discount">15 days ago</p>
                </div>
              </div>
              <div className="flex gap-2">
                <img src={green} alt="love" />
                <p>-$250,93</p>
              </div>
            </div>
          </div>
          <div className="w-[250px] paypal p-4 flex flex-col gap-6 items-center justify-between absolute top-[-60%] right-[-6%]">
            <div className="flex items-center justify-center gap-5">
              <div className="w-[50px] h-[50px] bg-white rounded-full flex items-start justify-center">
                <img className="mt-2" src={paypal} alt="paypal" />
              </div>
              <div>
                <h1 className="font-bold text-[20px]">Paypal</h1>
                <p className="discount text-[15px]">Checkout</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-10">
              <div>
                <p>Total</p>
                <h1 className="font-bold">$210</h1>
              </div>
              <button className=" text-[15px] logo borders p-[7px] rounded-md">
                Change
              </button>
            </div>
            <button className="transbutton p-1 w-full text-black">
              Make Payment
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-md bg-white absolute right-[-10%] bottom-[-7%]">
            <img src={tick} alt="tick" />
            <p className="text-black">Great! Your Payment is succesfully.</p>
          </div>
          <div className="blurs1 absolute top-[-10px] left-10"></div>
        </div>
        <div className="flex flex-1 flex-col gap-10 items-start justify-center">
          <div className="flex flex-col gap-5">
            <span className="font-[600] text-5xl">Easily control your</span>
            <span className="font-bold text-5xl">billing & invoicing.</span>
          </div>

          <p className="discount w-[70%]">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>

          <div className="flex items-center justify-around">
            <img src={google} alt="google" />
            <img src={app} alt="app" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trans;
