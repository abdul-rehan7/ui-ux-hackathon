import React from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default async function TopPicks() {
  const query = `*[_type == "item"]{title,price,slug:slug.current}`;
  const response = await client.fetch(query);
  console.log(response);
  return (
    <div className=" p-4 bg-green-500 grid grid-cols-4 justify-center items-center gap-4">
      {response.map((item: any) => (
        <Link href={response.slug}>
          <div className=" flex space-y-1 flex-col  bg-blue-400 p-4">
            <img className="p-4 h-[30vh] w-[18vw]" src="" alt="" />
            <p className="w-[70%]">{item.title}</p>
            <span className="font-semibold">Rs. {item.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
