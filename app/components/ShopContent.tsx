import React from "react";

const data = [
  {
    name: "Trenton modular sofa_3",
    img: "/cards/1.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/2.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/3.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/4.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/5.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/6.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/7.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/8.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/9.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/10.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/11.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/12.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/13.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/14.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/15.png",
    price: 25000,
  },
  {
    name: "Trenton modular sofa_3",
    img: "/cards/16.png",
    price: 25000,
  },
];
export default function ShopContent() {
  return (
    <div className="p-4 px-14 grid gap-4 grid-cols-4">
      {data.map((item) => (
        <div key={item.img} className="card h-[40vh] p-2 justify-evenly flex space-y-2 flex-col text-left">
          <div className="flex  justify-center items-center">
            <img className="w-[10vw]" src={`${item.img}`} alt="" />
          </div>
          <div>
            <p>{item.name}</p>
            <p className="font-semibold">Rs.{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
