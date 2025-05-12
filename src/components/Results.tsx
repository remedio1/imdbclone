import React from "react";

interface Movie {
  id: number;
  original_title: string;
  name: string;
  title: string;
}

export default function Results({ results }: { results: Movie[] }) {
  if (!results || results.length === 0) {
    return <div>No results found</div>;
  }
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          {result.original_title || result.name || result.title}
        </div>
      ))}
    </div>
  );
}
