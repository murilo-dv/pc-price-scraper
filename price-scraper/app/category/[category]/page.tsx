'use client'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card2 from '@/components/Card2';
import Filters from '@/components/Filters';
import allData from '@/app/api/dataloader';
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'

export default function Category({ params }: { params: { category: string; search: string } }) {
  const category = params.category;
  const busca = params.search;
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [selectedSort, setSelectedSort] = useState('default'); 

  const productCategory = allData.filter((product) => product.category === category);
  const filteredProducts = productCategory.filter((product) =>
    (search.toLowerCase() === '' || product.product.toLowerCase().includes(search)) &&
    (selectedStore === '' || product.store === selectedStore)
  );
  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (selectedSort) {
      case 'priceLowToHigh':
        return a.price - b.price;
      case 'priceHighToLow':
        return b.price - a.price;
      case 'nameAtoZ':
        return a.product.localeCompare(b.product);
      case 'nameZtoA':
        return b.product.localeCompare(a.product);
      default:
        return 0;
    }
  });
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleStoreFilter = (store: string) => {
    setSelectedStore(store);
    setCurrentPage(1); // Reset to the first page when changing the store filter
  };

  const handleSortChange = (sortOption: string) => {
    setSelectedSort(sortOption);
    setCurrentPage(1);
  };

  return (
    <main className='mb-20'>
      <div className='my-8 flex justify-center items-center'>
        <input
          id='search'
          className='bg-black text-gray-200 py-5 px-10 rounded-lg w-1/2 shadow-red-500 shadow-lg'
          placeholder='Search Product'
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className='text-2xl font-bold text-black mx-14 mb-5'>{category}</div>
      <div className='flex mx-14 justify-between'>
        <div className='mb-4 text-black'>
          <div>Filter by:</div>
        <div className='flex gap-4'>
        <button className='bg-black rounded-md text-white p-2 text-xs' onClick={() => handleStoreFilter('centrecom')}>Centrecom</button>
        <button className='bg-black rounded-md text-white p-2 text-xs' onClick={() => handleStoreFilter('umart')}>Umart</button>
        <button className='bg-black rounded-md text-white p-2 text-xs' onClick={() => handleStoreFilter('mwave')}>Mwave</button>
        </div>
      </div>

     

      <div className='mb-4 text-black'>
        <div>Sorting by:</div>
        <div className='flex gap-4'>
        <button className='bg-black rounded-md text-white p-2 text-xs' onClick={() => handleSortChange('default')}>Default</button>
        <button className='bg-black rounded-md text-white p-2 text-xs' onClick={() => handleSortChange('priceLowToHigh')}>Price Low to High</button>
        <button className='bg-black rounded-md text-white p-2 text-xs' onClick={() => handleSortChange('priceHighToLow')}>Price High to Low</button>
        <button className='bg-black rounded-md text-white p-2 text-xs' onClick={() => handleSortChange('nameAtoZ')}>Name A to Z</button>
        <button className='bg-black rounded-md text-white p-2 text-xs' onClick={() => handleSortChange('nameZtoA')}>Name Z to A</button>
        </div>
      </div>
      </div>
      {filteredProducts.length === 0 ? (
      <div className='text-center text-red-500 text-4xl mt-10 font-bold'>
        <div><MagnifyingGlassIcon className="text-center h-20 flex justify-center items-center"/></div>
        Product not found
        
        </div>
    ) : (
      <div className='flex px-10 justify-center items-center flex-wrap'>
        {currentProducts.map((product) => (
          <Card2
            key={uuidv4()}
            productName={product.product}
            price={product.price}
            link={product.link}
            image={product.image}
            category={product.category}
            store={product.store}
          />
        ))}
      </div>
    )}
      {/* Pagination buttons */}
      <div className='flex justify-center mt-6 flex-wrap px-20 gap-4 text-xs'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-2 rounded-md ${
              currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </main>
  );
}

