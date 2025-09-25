import React from 'react'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface SearchResultsListProps {
  results: User[];
}

export default function SearchResultsList({results}: SearchResultsListProps) {
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
