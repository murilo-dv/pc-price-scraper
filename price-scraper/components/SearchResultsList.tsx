import React from 'react'

export default function SearchResultsList({results}) {
  return (
    <div>
        {
            results.map((result, id) => {
                return <div key={id}>{result.name}</div>
            })
        }
    </div>
  )
}
