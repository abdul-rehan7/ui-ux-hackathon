import React from 'react'

export default function Hero() {
  return (
    <div className='flex  items-center px-7'>
      <div className="first ml-[4rem] w-[440px] h-[192px]  ">
        <span>
            <h1 className='poppins-regular text-[64px] leading-[96px]'>Rocket Single Seater</h1>
            <div className="shop-btn text-[24px]">Shop Now</div>
          
        </span>
      </div>
      <div className="second w-[60vw] transform scale-x-[-1]">
        <img src="/rocket-seater.png" alt="" />
      </div>
    </div>
  )
}
