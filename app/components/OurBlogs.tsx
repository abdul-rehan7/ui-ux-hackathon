import React from "react";

export default function OurBlogs() {
  return (
    <div className="py-[2rem]">
      <h1 className="text-center pt-[3rem] text-[36px] leading-[54px] ">
        Our Blogs
      </h1>
      <p className="text-center pb-[3rem] text-[#9F9F9F]">
        Find a bright ideal to suit your taste with our great selection
      </p>
      <div className="flex justify-center space-x-5 p-4">
        <div className="flex flex-col space-y-2">
          <img className="w-[20vw] h-[40vh]" src="/img1.jpeg" alt="" />
          <div className="text-center">Going all-in with millennial design</div>
          <div className=" read-btn   text-center">Read More</div>
        </div>
        <div className="flex flex-col space-y-2">
          <img className="w-[20vw] h-[40vh]" src="/img2.jpeg" alt="" />
          <div className="text-center">Going all-in with millennial design</div>
          <div className=" read-btn  text-center">Read More</div>
        </div>
        <div className="flex flex-col space-y-2">
          <img className="w-[20vw] h-[40vh]" src="/img3.jpeg" alt="" />
          <div className="text-center">Going all-in with millennial design</div>
          <div className="  read-btn text-center">Read More</div>
        </div>
      </div>
      <div className="last flex justify-center items-center flex-col">
        <div className="text-center mt-7">View All Posts</div>

        <div className="line h-[.15rem] w-[7rem] bg-black text-center"></div>
      </div>
    </div>
  );
}
