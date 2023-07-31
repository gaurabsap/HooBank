import React from "react";
import logo from "../assets/logo.svg";
const Nav = () => {
  return (
    <div className="flex items-center justify-around p-4 nav">
      <a className="flex items-center gap-0 text-[20px]" href="/">
        <img src={logo} alt="logo" />
        Hoo<span className="logo">Bank</span>
      </a>
      <div className="flex items-center gap-10">
        <a href="/">Home</a>
        <a className="links" href="/">
          About us
        </a>
        <a className="links" href="/">
          Features
        </a>
        <a className="links" href="/">
          Solution
        </a>
      </div>
    </div>
  );
};

export default Nav;
