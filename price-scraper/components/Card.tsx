import React from 'react'
import Image from 'next/image'
import Products from '../app/api/centrecom_data.json'

export default function card() {
  return (
    <div className='flex justify-center items-center flex-wrap'>
    {Products.map((product) => {
        return (
            <div
              className="p-5 bg-[#F6F6F6] rounded-md mt-4 mx-2 flex justify-between max-w-xl"
              key={product.product}
            >
              {/* Left Side */}
              <div>
                <Image
                  src={product.image}
                  width={250}
                  height={250}
                  alt={product.product}
                />
              </div>
              {/* Center */}
              <div className="text-black flex flex-wrap">
                <div className="">{product.product}</div>
                <div className="bold text-2xl text-red-500 m-3">{product.price}</div>
              </div>
              {/* Right Side */}
              <div className='flex-col'>
                <div>STORE LOGO</div>
              <a href={product.link}>
                  <button className="bg-cyan-500 py-2 px-5 rounded-md bold text-white pointer">
                    Go to Shop{" "}
                  </button>
                </a>
              </div>
            </div>
        );
      })}
      </div>
  )
  
}
