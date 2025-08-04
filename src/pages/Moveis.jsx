import React, { useEffect } from "react";
import { dummyShowsData } from "../assets/assets";
import BuyTechits from "../components/BuyTechits";
import MovieDetails from "../components/MovieDetails";
import BlurCircle from "../components/BlurCircle";

const Moveis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex  justify-center items-center flex-col mt-40 ">
      <BlurCircle top="80px" left="0px" />
      <BlurCircle bottom="0px" right="0px" />
      <h1 className="text-2xl font-semibold text-white mb-6 w-full text-left pl-52">
        Now Showing
      </h1>
      <div className="grid relative mt-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 grid-cols-1 gap-10">
        {dummyShowsData.map((item) => (
          <div
            key={item.id}
            className="w-66 bg-[#1E2939] shadow-lg rounded-2xl overflow-hidden 
                     hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <img
              src={item.poster_path}
              alt={item.title}
              className="w-full h-52 object-cover p-2 rounded-2xl"
            />
            {/* Movie Content */}
            <div className="flex flex-col flex-grow p-4 text-white">
              {/* Title & Info */}
              <div className="space-y-2">
                <h1 className="text-lg font-semibold leading-tight">
                  {item.title}
                </h1>

                <MovieDetails
                  release_date={item.release_date}
                  genres={item.genres}
                  runtime={item.runtime}
                />
              </div>

              {/* Action + Rating (Fixed Bottom) */}
              <BuyTechits vote_average={item.vote_average} item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moveis;
