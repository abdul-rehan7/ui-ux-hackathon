import React from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import ShopContent from "../components/ShopContent";

export default function page() {
  return (
    <div>
      <div>
        <section className="insta-section relative h-[50vh] p-8 flex justify-center items-center text-black text-center">
          <div className="relative z-10 flex flex-col items-center">
            <img className="w-[5rem]" src="logo.png" alt="" />
            <h2 className=" text-5xl font-bold">Shop</h2>
            <p className=" mt-4">
              <span className="font-semibold">Home {">"} </span> Shop
            </p>
          </div>
          <div className="absolute inset-0 bg-[url('/shop-bg.jpeg')] bg-cover bg-center"></div>
        </section>
      </div>
      <div className="bar flex justify-between bg-[#FAF4F4] w-full my-10 p-4">
        <div className="first flex space-x-4">
          <div className="span flex items-center space-x-2">
            <HiOutlineAdjustmentsHorizontal /> <p>Filter</p>
          </div>
          <div className="span flex items-center space-x-2">
            <img className="w-7" src="/dots.png" alt="" />
          </div>
          <div className="span flex items-center space-x-2">
            <img className="w-5" src="/vector.png" alt="" />
          </div>
          <div className="border-l-2 flex items-center border-gray-400 px-4">
            Showing 1-16 of 32 results
          </div>
        </div>
        <div className="second flex space-x-4 items-center">
          <p>Show</p>
          <div className="box bg-white text-gray-300 h-10 w-10 text-center p-2">
            16
          </div>
          <p>Sort By</p>
          <div className="box bg-white text-gray-300 h-10 w-[10rem] text-left px-4 p-2">
            Default
          </div>
        </div>
      </div>

      {/* ------------ SHOP CONTENT ------------- */}
      <ShopContent />

      {/* ------------ BAR ------------- */}

      <div className=" w-full flex justify-center space-x-4 p-4">
        <div className="box rounded-md bg-[#FBEBB5] w-9 h-9 flex items-center justify-center text-center">
          1
        </div>
        <div className="box rounded-md bg-[#FFF9E5] w-9 h-9 flex items-center justify-center text-center">
          2
        </div>
        <div className="box rounded-md bg-[#FFF9E5] w-9 h-9 flex items-center justify-center text-center">
          3
        </div>
        <div className="box rounded-md bg-[#FFF9E5] w-16 h-9 px-6 flex items-center justify-center text-center">
          Next
        </div>
      </div>

      {/* ------------ FINAL BAR ------------- */}

      <div className="bar flex justify-around py-10 p-4 my-5 h-[40vh] items-center bg-[#FAF4F4]">
        <div className=" w-[25%]">
          <h1 className="text-xl font-semibold">Free Delivery</h1>
          <p className="text-gray-400">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div className=" w-[25%]">
          <h1 className="text-xl font-semibold">90 Days Return</h1>
          <p className="text-gray-400">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div className=" w-[25%]">
          <h1 className="text-xl font-semibold">Secure Payment</h1>
          <p className="text-gray-400">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
 
    </div>
  );
}
