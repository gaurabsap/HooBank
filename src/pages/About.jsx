import React from "react";
import star from "../assets/Star.svg";
import shield from "../assets/shield.svg";
import send from "../assets/Send.svg";
const About = () => {
  return (
    <>
      <div className="m-20 p-[10px] flex justify-center items-center gap-10">
        <div className="flex flex-col w-[50%] justify-center gap-10">
          <div className="flex flex-col gap-5">
            <span className="text-5xl font-bold">You do the business,</span>
            <span className="text-5xl font-bold">we’ll handle the money.</span>
          </div>
          <p className="w-[80%] discount">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <div>
            <button className="start p-2 rounded text-black">
              Get started
            </button>
          </div>
        </div>
        <div className="flex w-[40%] flex-col gap-5">
          <div className="flex items-center gap-5">
            <img src={star} alt="star" />
            <div className="flex flex-col gap-3">
              <h1>Rewards</h1>
              <p className="discount leading-7">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-gray-900 p-2 rounded-lg">
            <img src={shield} alt="star" />
            <div className="flex flex-col gap-3">
              <h1>100% Secured</h1>
              <p className="discount leading-7">
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={send} alt="star" />
            <div className="flex flex-col gap-3">
              <h1>Balance Transfer</h1>
              <p className="discount leading-7">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
