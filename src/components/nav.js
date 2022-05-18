import React from 'react'
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className="bg-[#111827] fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto pt-8 pb-8 flex items-center justify-between ">
        <div className="w-[10%]">
          <img src={Logo} alt="not found" className='w-10'/>
        </div>

        <div className="w-[50%] flex items-center justify-around text-[white] font-[Inter]">
          <Link to="">Featured</Link>
          <Link to="">Tutorial</Link>
          <Link to="">Freelance</Link>
          <Link to="">Design</Link>
          <Link to="">Freebies</Link>
        </div>
        <div className="flex items-center justify-between w-[13%]">
          <div className="w-[90px] h-[50px] flex items-center justify-center rounded-[5px] bg-[#2563EB] text-[white] cursor-pointer hover:bg-[#00319C] transition delay-200 duration-500 ease-in-out">
            Login
          </div>
          <div className="w-[90px] h-[50px] flex items-center justify-center rounded-[5px] bg-[#1F2937] text-[white] cursor-pointer hover:bg-[#000] transition delay-200 duration-500 ease-in-out">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav