import React from "react";

export default function OurInsta() {
  return (
    <div>
      <section className="insta-section relative h-[50vh] p-8 flex justify-center items-center text-black text-center">
        <div className="relative z-10">
          <h2 className=" text-5xl font-bold">Our Instagram</h2>
          <p className=" mt-4">Follow our store on Instagram</p>
          <h1 className="my-7">Follow Us</h1>
        </div>
        <div className="absolute inset-0 bg-[url('/insta-bg.jpeg')] bg-cover bg-center"></div>
      </section>
    </div>
  );
}
