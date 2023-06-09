"use client";

import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
type Props = {};

const Header = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {logout} = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const logOut = async ()=>{
    await logout()
  }
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        {/* <BasicMenu /> */}

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <BiSearch className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <AiFillBell className="h-6 w-6" />
        <button onClick={logOut}>
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
