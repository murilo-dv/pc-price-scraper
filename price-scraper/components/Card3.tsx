import React from 'react'
import Image from 'next/image'


export default function card3({name, img, price, link}) {
  return (
    
      <div className="p-5 bg-white rounded-md mt-4 mx-2 flex items-center max-w-2xl">
        {/* Left Side */}
        <div>
                <Image
                  src={img}
                  width={250}
                  height={250}
                  alt='image'
                />
          </div>
          {/* Center */}
          <div className="text-black flex flex-wrap">
                <div className="">{name}</div>
                <div className="bold text-2xl text-red-500 m-3">{price}</div>
              </div>
              {/* Right Side */}
              <div className=''>
                <div>STORE LOGO</div>
              <a href={link}>
                  <button className="bg-cyan-500 py-2 px-2 rounded-md bold text-white pointer">
                    Go to Shop
                  </button>
                </a>
              </div>
      </div>
      
  )
  
}
