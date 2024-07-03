'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Hero from "@/components/Hero";
import img_cpu from "@/public/assets/images/CPU.webp"
import img_laptop from "@/public/assets/images/laptop.webp"
import img_apple from "@/public/assets/images/apple.webp"
import img_monitor from "@/public/assets/images/monitor.webp"
import img_ssd from "@/public/assets/images/ssd.webp"
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Update the URL with the search query
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleKeyPress = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  
  return (
    <main className="flex flex-col min-h-screen">
      

      <div className='flex flex-col justify-center items-center'>
      <div className="flex m-20 p-6 max-w-screen-2xl w-[800px] text-xl text-center bg-neutral-950 rounded-2xl border-spacing-1 border-red-600 shadow-2xl shadow-pink-700/50 border-2">
        <input 
          className='w-full text-xl text-center bg-transparent focus:outline-0' 
          placeholder='Search the product here' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)
          }
          onKeyDown={handleKeyPress}
        />
        <button
        className="px-4 py-2 bg-gray-800/50 text-white rounded-2xl shadow-2xl shadow-pink-700/20"
        onClick={handleSearch}
        
      >
        <MagnifyingGlassIcon className="h-10"/>
      </button>
      </div>
      
    </div>
      <div className='mx-20 mt-12'>
          <h1 className='text-3xl underline text-black font-bold'>Featured Categories</h1>
          <div className="flex justify-between text-black flex-wrap mt-10 mb-28">
            
          <a href="/category/laptops">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white rounded-md w-56 h-56 flex justify-center items-center">
              <Image 
                src={img_laptop}
                width={200}
                height={200}
                />
              </div>
              <p className=" font-semibold mt-3">Laptops</p>
            </div>
            </a>

            <a href="/category/apple">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white rounded-md w-56 h-56 flex justify-center items-center">
              <Image 
                src={img_apple}
                width={200}
                height={200}
                />
              </div>
              <p className=" font-semibold mt-3">Apple</p>
            </div>
            </a>

            <a href="/category/monitors">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white rounded-md w-56 h-56 flex justify-center items-center">
              <Image 
                src={img_monitor}
                width={200}
                height={200}
                />
              </div>
              <p className=" font-semibold mt-3">Monitors</p>
            </div>
            </a>

            <a href="/category/ssd">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white rounded-md w-56 h-56 flex justify-center items-center">
              <Image 
                src={img_ssd}
                width={200}
                height={200}
                />
              </div>
              <p className=" font-semibold mt-3">SSD Hard Drives</p>
            </div>
            </a>

            <a href="/category/cpu-processors">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white rounded-md w-56 h-56 flex justify-center items-center">
                <Image 
                src={img_cpu}
                width={200}
                height={200}
                />
              </div>
              <p className=" font-semibold mt-3">CPU Processors</p>
            </div>
            </a>

            
            

            

            



          </div>
        </div>
      {/* <div className="flex flex-wrap">
      {Products.map((product) => {
        return (
          <Card3 key= {product.price}
          name = {product.product}
          img = {product.image}
          price = {product.price}
          link = {product.link}
          />  
        );
      })}
      </div> */}
    </main>
  );
}
