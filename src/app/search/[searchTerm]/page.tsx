/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Results from '@/components/Results';

export default async function SearchPage({ params } : { params: { searchTerm: string } }) {
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}
        &language=en-US&page=1&ionclude_adult=false` );
    const data = await res.json();
    const results = data.results;

  return (
    <div>
        {
        results && results.length === 0 ? (
            <h1 className='text-center pt-6'>
                No results found for 
            </h1>
        ) : null
    }
        {results && <Results results = {results}/> }
            
        
        
    </div>
  )
}
