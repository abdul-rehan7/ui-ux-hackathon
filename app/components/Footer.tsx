import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-around gap-5 w-full p-8">
      <div className="bg-red-400 flex justify-center items-center p-4">
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
     <input type="search" value="" />
      </div>
 
    </div>
  );
}
