import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default async function MoviePage(props) {
  const movieId = props.params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const movie = await res.json();
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6 ">
        <div className="justify-between flex items-center">
          <div className="flex-1 ">
            <div className="md:flex-row md:items-center md:space-x-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                {movie.title || movie.name}
              </h2>

              <ul className="flex items-center gap-2 pb-2 text-gray-600 dark:text-gray-300">
                <li>
                  {movie.release_date?.split("-")[0] ||
                    movie.first_air_date?.split("-")[0]}
                </li>
                <li>·</li>
                <li>{movie.runtime || movie.episode_run_time?.[0]} min</li>
              </ul>
            </div>
          </div>

          {/* Parte direita - Nota */}
          <div className=" flex flex-row gap-3">
            <div className="items-center justify-center flex flex-col">
              User Rating
              <div className="text-1xl font-bold text-gray-800 dark:text-white">
                {movie.vote_average?.toFixed(1)}
                <span className="ml-1 text-gray-600 dark:text-gray-400 text-sm">
                  /10
                </span>
              </div>
            </div>
            <div className="items-center justify-center flex flex-col">
              Popularity
              <div className="text-1xl font-bold text-gray-800 dark:text-white">
                {movie.popularity?.toFixed(1)}
                <span className="ml-1 text-gray-600 dark:text-gray-400 text-sm"></span>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          width={800}
          height={500}
          className="rounded-lg flex"
        ></Image>
        <div className="p-2">
          <p className="">
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <div className="border-t border-gray-200 opacity-50 my-2 max-w-197 "></div>
          <p className="max-w-197 md:flex md:">{movie.overview}</p>
          <div className="border-t border-gray-200 opacity-50 my-2 max-w-197"></div>
          <p><span className="font-bold mr-1">Date Released:</span>{movie.release_date}</p>
        <div className="border-t border-gray-200 opacity-50 my-2 max-w-197"></div>

          <p className="flex items-center ">
            <span className="font-bold mr-1">Vote Count:</span>
            <FiThumbsUp className="" />
            {movie.vote_count}
          </p>
          <div className="border-t border-gray-200 opacity-50 my-2 max-w-197"></div>
          <p>{movie.rated}</p>

          <p className="flex items-center max-w-197">
            {movie.production_companies
              .map((company) => company.name)
              .join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
