import React from "react";
import ajay2 from "../assets/ajay2.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={ajay2} alt="name" className="h-[80px] " />
          </a>
         <Link to="contact">
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
