'use client'
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex text-sm justify-around gap-5 w-full p-7">
      <div className="text-gray-400 flex justify-center items-center p-4">
        400 University Drive Suite 200 Coral <br /> Gables, <br />
        FL 33134 USA
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="text-gray-400">Links</h1>
        <Link href={"/"}>Home</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="text-gray-400">Help</h1>
        <Link href={"/"}>Payment Options</Link>
        <Link href={"/shop"}>Returns</Link>
        <Link href={"/about"}>Privacy Policies</Link>
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="text-gray-400">NewsLetter</h1>
        <div className="flex space-x-2 items-center">

        <input
          className="border-b-2 p-2 border-black"
          type="search"
          value="Enter Your Email Address"
          onChange={() => console.log("Console")}
        />
        <span className="border-b-2 border-black font-semibold p-2">SUBSCRIBE</span>
        </div>
      </div>
    </div>
  );
}
