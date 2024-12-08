import Link from 'next/link'
import React from 'react'
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div className='p-2 flex justify-center'>

    <div className='bg-[var(--primary)] w-[95%] flex justify-end gap-[10rem]  p-4'>
      <div className="first poppins-regular flex space-x-12">
        <Link href={'/'}>Home</Link>
        <Link href={'/shop'}>Shop</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>
      <div className="first font-medium flex space-x-14 items-center">
        <Link className='flex items-center' href={'/shop'}><FaRegUser />!</Link>
        <Link href={'/about'}><CiSearch className='text-xl'/></Link>
        <Link href={'/'}><GoHeart /></Link>
        <Link href={'/contact'}><IoCartOutline className='text-xl' /></Link>
      </div>
    </div>
    </div>
  )
}
