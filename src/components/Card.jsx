import React from "react";
import { dummyShowsData } from "../assets/assets";
import BuyTechits from "../components/BuyTechits";
import MovieDetails from "./MovieDetails";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 ">
      {dummyShowsData.slice(0, 4).map((item) => (
        <div
          key={item.id}
          className="w-66 bg-[#1E2939] shadow-lg rounded-2xl overflow-hidden 
                     hover:scale-105 transition-transform duration-300 flex flex-col"
        >
          {/* Poster Image */}
          <img
            loading="lazy"
            src={item.poster_path}
            alt={item.title}
            className="w-full h-52 object-cover p-2 rounded-2xl"
          />

          {/* Movie Content */}
          <div className="flex flex-col flex-grow p-4 text-white space-y-2">
            <h1 className="text-lg font-semibold leading-tight">
              {item.title}
            </h1>

            <MovieDetails
              release_date={item.release_date}
              runtime={item.runtime}
              genres={item.genres}
            />

            <BuyTechits vote_average={item.vote_average} item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
