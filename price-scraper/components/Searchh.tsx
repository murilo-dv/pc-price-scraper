'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function Searchh() {
  const searchParams = useSearchParams()

  const search = searchParams.get('search')
  
    return (
    <>Search: {search}</>
  )
}
