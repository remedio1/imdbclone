import React from "react";
import Card from "./Card";

interface Movie {
  id: number;
  original_title: string;
  name: string;
  title: string;
  key : number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_count: number;
  rating: number;

}

export default function Results({ results }: { results: Movie[] }) {
  
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid:cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card
          key={result.id} result={result}/>
      ))}
    </div>
  );
}
