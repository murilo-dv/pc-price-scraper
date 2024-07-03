'use client'
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Card2 from '@/components/Card2'
import Products from '../../../api/2023-12-06/centrecom_data_monitors.json'
import Products2 from '../../../api/2023-12-06/centrecom_data_cpu-processors.json'
import Products3 from '../../../api/2023-12-06/centrecom_data_desktops.json'
import Products4 from '../../../api/2023-12-06/centrecom_data_laptops.json'
import Hero from '@/components/Hero'
import { useSearchParams } from 'next/navigation'

const products = [...Products,...Products2,...Products3,...Products4]

export default function Category({ params }: { params: {category: string, search: string},}) {
  const searchParams = useSearchParams()
  const searchP = searchParams.get('busca')
  const category = params.category 
  const busca = params.search
  const productCategory = products.filter(product => product.category === category);
  const [search, setSearch] = useState("");

    return (
      <main>
        <div className="flex text-6xl p-5 justify-center items-center">Price Scraper</div>
        <div className="flex p-5 justify-center items-center">
          <input className='text-black py-2 px-10 rounded-full w-1/2 shadow-red-800 shadow-lg' placeholder='Search Product' onChange={(e) => setSearch(e.target.value) }/>
        </div>
        
        <div className='flex justify-center items-center flex-wrap'>
    {productCategory.filter((product) => product.price === searchP  ).map((product) => {
        return (
            <div
              className="p-5 bg-white rounded-md mt-4 mx-2 flex justify-between max-w-xl"
              key={uuidv4()}
            >
              <Card2
              productName = {product.product}
              price = {product.price}
              link = {product.link}
              image =  {product.image}
              category = {product.category}
              />
            </div>
        );
      })}
      </div>
    </main>
  )
}
