"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { TbShoppingBagX } from "react-icons/tb";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-2 bg-[var(--primary)] flex justify-center">
      <div className="bg-transparent w-[95%] flex justify-end gap-[10rem] p-4">
        <div className="first poppins-regular flex space-x-12">
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="first font-medium flex space-x-14 items-center">
          <Link className="flex items-center" href={"/shop"}>
            <FaRegUser />!
          </Link>
          <Link href={"/about"}>
            <CiSearch className="text-xl" />
          </Link>
          <Link href={"/"}>
            <GoHeart />
          </Link>
          {/* Cart icon as button */}
          <button onClick={handleToggle}>
            <IoCartOutline className="text-xl" />
          </button>
        </div>
        {/* Content that toggles */}
        {isVisible && (
          <div>
            <div className="top flex flex-col justify-between items-stretch space-y-3 absolute right-0 top-0 p-4 bg-white w-[25vw] h-[70vh] z-10">
              <div>
                <div className="flex justify-between">
                  <div className="font-bold  poppins-bold">Shopping Cart</div>
                  <div className="cursor-pointer" onClick={handleToggle}>
                    <TbShoppingBagX />
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between items-center gap-7">
                  <div className="font-bold  poppins-bold">
                    <img
                      className="w-[4rem] rounded-md  p-2 bg-[#FBEBB5]"
                      src="/cards/1.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="cursor-pointer poppins-regular flex flex-col"
                    onClick={handleToggle}
                  >
                    <span>Asgaard Sofa</span>
                    <span className="text-[12px]">
                      1&nbsp;&nbsp; x{" "}
                      <span className="text-[#B88E2F]">
                        &nbsp;&nbsp;Rs. 250,000.00
                      </span>
                    </span>
                  </div>
                  <div className="bg-gray-400 text-white p-2 flex justify-center items-center rounded-full h-6 w-6">
                    <div>X</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-evenly py-4">
                  <p>Subtotal</p>
                  <p className="text-[#B88E2F] font-semibold">Rs. 250,000.00</p>
                </div>
                <hr />
                <div className="flex justify-evenly py-4">
                <div className="border-[1px] border-black rounded-full p-1 px-6">View Cart</div>
                <div className="border-[1px] border-black rounded-full p-1 px-6">Checkout</div>
              
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
