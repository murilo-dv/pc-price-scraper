'use client'
import React, {useState} from 'react'



export default function SearchBar({setResults}) {
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(json => {
        const results = json.filter((user) => {
            return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        setResults(results)
    })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  
    return (
    <div>
    <input className='m-20 p-6 max-w-screen-2xl w-[800px] text-xl text-center bg-neutral-950 rounded-2xl border-spacing-1 border-red-600 shadow-2xl shadow-pink-700/50 border-2' placeholder='Search the product here' value={input} onChange={(e) => handleChange(e.target.value) }/>
    </div>
  )
}
