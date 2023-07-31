import React from "react";
import photo from "../assets/method.png";
const Method = () => {
  return (
    <div className="m-20 p-5 flex items-center justify-center">
      <div className="p-5 flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-5">
          <span className="font-bold text-5xl">Find a better card deal</span>
          <span className="font-bold text-5xl">in few easy steps.</span>
        </div>

        <p className="w-[60%] discount">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="transbutton p-2 text-black">Get started</button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img className="w-[90%]" src={photo} alt="photo" />
      </div>
    </div>
  );
};

export default Method;
