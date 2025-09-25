import React from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';
import centrecom from '@/public/assets/images/centrecom_logo.svg'
import umart from '@/public/assets/images/umart_logo.png'
import mwave from '@/public/assets/images/mwave_logo.jpeg'

interface Card2Props {
  productName: string;
  price: string;
  link: string;
  image: string;
  category: string;
  store: string;
}

export default function card({productName, price, link, image, category, store}: Card2Props) {
  const getStoreLogo = (store: string) => {
    switch (store) {
      case 'centrecom':
        return centrecom;
      case 'umart':
        return umart;
      case 'mwave':
        return mwave;
      default:
        return null; // You can provide a default logo or handle this case accordingly
    }
  };

  return (
    <div className='flex flex-col justify-center items-center flex-wrap' key={uuidv4()}>
            <div
              className="p-5 flex-col bg-white shadow-lg border-2 rounded-md mt-4 mx-2 flex justify-between max-w-xs h-96"
              key={uuidv4()}
            >
              {/* Left Side */}
              <div className='flex justify-center items-center'>
                <Image
                  src={image}
                  width='200'
                  height='0'
                  style={{ width: '70%', height: 'auto' }}
                  alt={productName}
                />
              </div>
              {/* Center */}
              
                <div className="text-sm text-black">{productName}</div>
                <div className="text-xl font-semibold text-red-500 flex justify-between">
                  ${price}
                  <Image
                  src={getStoreLogo(store)}
                  width={100}
                  height={100}
                  alt=''
                  />
                </div>
              
              {/* Right Side */}
              
              <div className='flex justify-center items-center'>
              <a href={link} target="_blank">
                  <button className=" bg-neutral-950 w-[181px] text-sm py-2 px-5 rounded-md bold text-white pointer">
                    Go to Shop{" "}
                  </button>
                </a>
                </div>
              
            </div>
  
      </div>
  )
  
}
