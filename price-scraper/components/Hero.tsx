'use client'
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Update the URL with the search query
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <input 
          className='m-20 p-6 max-w-screen-2xl w-[800px] text-xl text-center bg-neutral-950 rounded-2xl border-spacing-1 border-red-600 shadow-2xl shadow-pink-700/50 border-2' 
          placeholder='Search the product here' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

