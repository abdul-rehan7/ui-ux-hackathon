import React from "react";

export default function TopPicks() {
  return (
    <div className="py-[30px]">
      <h1 className="text-center text-[36px] leading-[54px] ">
        Top Picks For You
      </h1>
      <p className="text-center text-[#9F9F9F]">
        Find a bright ideal to suit your taste with our great selection of
        suspension, floor and table lights.
      </p>
      <div className="flex justify-center gap-10 p-16">
        <div className=" flex space-y-1 flex-col">
          <img className="p-4 h-[30vh] w-[18vw]" src="/trenton.png" alt="" />
          <p className="w-[70%]">Trenton modular sofa_3</p>
          <span className="font-semibold">Rs. 25,000.00</span>
        </div>
        <div className=" flex space-y-1 flex-col">
          <img className="p-4 h-[30vh] w-[18vw]" src="/granite.png" alt="" />
          <p className="w-[70%]">Granite dining table with dining chair</p>
          <span className="font-semibold">Rs. 25,000.00</span>
        </div>
        <div className=" flex space-y-1 flex-col">
          <img className="p-4 h-[30vh] w-[18vw]" src="/outdoor-bar.png" alt="" />
          <p className="w-[70%]">Outdoor bar table and stool</p>
          <span className="font-semibold">Rs. 25,000.00</span>
        </div>
        <div className=" flex space-y-1 flex-col">
          <img className="p-4 h-[30vh] w-[18vw]" src="/plain-console.png" alt="" />
          <p className="w-[70%]">Plain console with teak mirror</p>
          <span className="font-semibold">Rs. 25,000.00</span>
        </div>
    
      </div>
    </div>
  );
}
