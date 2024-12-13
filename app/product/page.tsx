import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function page() {
  return (
    <div>
      <div className="top px-[5rem] p-5 w-full">
        {/* --------------- TOP ------------ */}

        <div className="flex space-x-4">
          <p className="text-gray-400">Home</p>
          <p className="font-bold">{">"}</p>
          <p className="text-gray-400">Shop</p>
          <p className="font-bold">{">"}</p>
          <p>|</p>
          <p>Asgaard Sofa</p>
        </div>
        {/* --------------- Main ------------ */}
        <div className="flex gap-[1.5rem] p-12 ">
          <div className="flex flex-col gap-4 items-center">
            <img
              className="bg-[#FFF9E5] rounded-md p-1 w-[4rem] h-[4rem]"
              src="/asgaard-sofa.png"
              alt=""
            />
            <img
              className="bg-[#FFF9E5] rounded-md p-1 w-[4rem] h-[4rem]"
              src="/asgaard-sofa.png"
              alt=""
            />
            <img
              className="bg-[#FFF9E5] rounded-md p-1 w-[4rem] h-[4rem]"
              src="/asgaard-sofa.png"
              alt=""
            />
            <img
              className="bg-[#FFF9E5] rounded-md p-1 w-[4rem] h-[4rem]"
              src="/asgaard-sofa.png"
              alt=""
            />
          </div>
          <div className="h-[24rem] flex items-center bg-[#FFF9E5]">
            <img className="w-[20rem]" src="/asgaard-sofa.png" alt="" />
          </div>
          <div className="flex flex-col ml-10 space-y-2">
            <h1 className="font-semibold text-3xl poppins-regular text-[42px]">
              Asgaard Sofa
            </h1>
            <p className="text-[24px] text-gray-400">Rs. 250,000.00</p>
            <div className="flex items-center space-x-5">
              <div className="flex space-x-2">
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-2" src="/half-star.png" alt="" />
              </div>
              <div>|</div>
              <div className="text-sm text-gray-400">5 Customer Review</div>
            </div>
            <div className=" w-[470px]">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </div>
            <div className="size my-1 flex flex-col space-y-1">
              <h1 className="text-gray-400">Size</h1>
              <h1 className="flex gap-4">
                <span className="bg-[#FBEBB5] w-8 h-8 text-sm rounded-md flex items-center justify-center">
                  XL
                </span>
                <span className="bg-[#FAF4F4] w-8 h-8 text-sm rounded-md flex items-center justify-center">
                  XL
                </span>
                <span className="bg-[#FAF4F4] w-8 h-8 text-sm rounded-md flex items-center justify-center">
                  XL
                </span>
              </h1>
            </div>
            <div className="colors my-1 flex flex-col space-y-1">
              <h1 className="text-gray-400">Color</h1>
              <h1 className="flex gap-4">
                <span className="bg-[#816DFA] w-8 h-8 text-sm rounded-full flex items-center justify-center"></span>
                <span className="bg-[#000000] w-8 h-8 text-sm rounded-full flex items-center justify-center"></span>
                <span className="bg-[#CDBA7B] w-8 h-8 text-sm rounded-full flex items-center justify-center"></span>
              </h1>
            </div>
            <div className="flex gap-2">
              <div className="btn p-2 flex space-x-2 border rounded-md border-black w-[6rem] items-center  h-[3rem] justify-between">
                <span>+</span>
                <span>1</span>
                <span>-</span>
              </div>
              <div className="btn p-2 flex space-x-2 border-[1.5px] rounded-md border-black w-[10rem] items-center  h-[3rem] text-center justify-center">
                Add to Cart
              </div>
            </div>
            <div className="h-7"></div>
            <hr />
            <div className="flex gap-2">
              <div className="flex  space-y-3 text-gray-400  flex-col">
                <p>SKU</p>
                <p>Category</p>
                <p>Tags</p>
                <p>Share</p>
              </div>
              <div className="flex space-y-3 text-gray-400 flex-col">
                <p>: &nbsp;&nbsp;SS001</p>
                <p>: &nbsp;&nbsp;Sofas</p>
                <p>: &nbsp;&nbsp;Sofa,Chair,Home,Shop</p>
                <p className="flex items-center gap-3 text-black">
                  :&nbsp;&nbsp;
                  <AiFillTwitterCircle className="text-xl" />
                  <FaFacebook className="text-xl" />
                  <FaLinkedin className="text-xl" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="p-7 text-lg w-full flex flex-col justify-center items-center text-gray-400">
          <div className="top flex justify-center gap-5">
            <span className="text-black">Description</span>
            <span>Additional Information</span>
            <span>Reviews {"[5]"}</span>
          </div>
          <div className="flex flex-col gap-4 text-sm w-[85%] py-4">
            <p>Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#FFF9E5] py-10 p-4 flex items-center justify-center">
              <img className="w-[30rem]" src="/sofa-1.png" alt="" />
            </div>
            <div className="bg-[#FFF9E5] py-10 p-4 flex items-center justify-center">
              <img className="w-[30rem]" src="/sofa-2.png" alt="" />
            </div>
          </div>
        </div>
          <hr />
      </div>
    </div>
  );
}
