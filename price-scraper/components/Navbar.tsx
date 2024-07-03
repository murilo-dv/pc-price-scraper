import React from 'react'

export default function navbar() {
  return (
    <div className='px-14 py-10 bg-neutral-950 flex justify-between'>
    <div>
    <a href='/'>
    <p className='text-2xl font-black'>PC <span className='text-pink-700'>Parts price comparison</span></p>
    </a>
    </div>
    <ul className='flex gap-4 justify-center text-[11pt] items-center'>
      <li><a href='/category/laptops/'>Laptops</a></li>
      <li><a href='/category/apple/'>Apple</a></li>
      <li><a href='/category/cpu-processors/'>CPU Processors</a></li>
      <li><a href='/category/monitors/'>Monitors</a></li>
      <li><a href='/category/graphic-cards/'>Graphic Cards</a></li>

      <li><a href='/category/ssd/'>SSD</a></li>
      <li><a href='/category/motherboards/'>Motherboard</a></li>
      <li><a href='/category/memory-ram/'>Memory Ram</a></li>
      <li><a href='/category/power-supply/'>Power Suply</a></li>
      <li><a href='/category/desktops/'>Desktops</a></li>

    </ul>
    </div>
  )
}
