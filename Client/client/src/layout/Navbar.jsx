import React from 'react';
import navLogo from "../assets/nav-logo.png";
import cartImg from "../assets/cart-img.svg";
import dropDown from "../assets/dropdown-logo.svg";
import locationLogo from "../assets/Location-logo.svg";
import loginLogo from "../assets/login-logo.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-[#100101]">
      <nav className="container mx-auto px-[20px] md:px-[60px] py-[10px] lg:px-[130px] lg:py-[16px] flex justify-between items-center">
        
        {/* Left Section - Logo and Location */}
        <div className="flex gap-6 items-center">
          <img src={navLogo} alt="nav-logo" className="w-full h-auto" />
          
          {/* DaisyUI Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="cursor-pointer flex items-center">
              <img src={locationLogo} alt="location-logo" className="w-auto h-auto" />
              <h4 className="hidden md:block text-[#F0F0F0] text-[20px] font-[500] px-2">Location</h4>
              <img src={dropDown} alt="drop-down-img" />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
              <li><a href="#">Lagos</a></li>
              <li><a href="#">Abuja</a></li>
              <li><a href="#">Benin</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Section - Search */}
        <div>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="hidden lg:block w-[300px] h-[56px] rounded-[32px] outline-none bg-[#F0F0F0] placeholder:text-[#100101] ps-[30px] border font-[400] text-[20px]"
            />
          </form>
        </div>

        {/* Right Section - Links and Buttons */}
        <div className="flex gap-4 items-center">
          <h2 className="font-[500] text-[20px] text-[#FBFBFB] hidden lg:block">All Products</h2>
          
          <ul className="flex gap-2"> {/* Reduced gap from 4 to 2 */}
  <li className="flex items-center w-[110px] h-[44px] py-[10px] px-[14px] bg-[#B67B0F] rounded-[24px]">
    <img src={cartImg} alt="cart-img" className="w-5 h-5" /> {/* Reduced icon size */}
    <Link className="ps-1 text-[#FBFBFB] font-[500] text-[16px]"> {/* Reduced text size */}
      <span className="hidden md:inline-block">Cart</span> 00
    </Link>
  </li>
  <li className="flex items-center w-[100px] h-[44px] py-[10px] px-[14px] bg-[#F0F0F0] rounded-[24px]">
    <img src={loginLogo} alt="login-img" className="w-5 h-5" /> {/* Reduced icon size */}
    <Link className="ps-1 text-[#100101] font-[500] text-[16px]">
      <span className="hidden md:inline-block">Login</span>
    </Link>
  </li>
</ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

