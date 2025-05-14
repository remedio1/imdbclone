import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

interface Movie {
  id: number;
  original_title: string;
  name: string;
  title: string;
  key: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_count: number;
}

export default function Card({ result }: { result: Movie }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-lg rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 ease-in-out">
      <Link href={`/movie/${result.id}`}>
        <Image
          className=" sm:rounded-t-lg  group-hover:opacity-75 transition-opacity duration-200 ease-in-out"
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="movie poster"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate ">
            {result.title || result.name || result.original_title}
          </h2>
          <p className="flex items-center ">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="inline-block ml-2" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
