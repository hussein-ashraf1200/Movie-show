import React from "react";
import { dummyDashboardData } from "../../assets/assets";
import MovieDetails from "../MovieDetails";
import BuyTechits from "../BuyTechits";
import { Star } from "lucide-react";

const ActiveShowCard = () => {
  return (
    <div className=" w-[400px]  flex flex-col justify-between items-center ">
      <div className="">
        {dummyDashboardData.activeShows.map((show) => (
          <div>
            <img
              loading="lazy"
              src={show.movie.backdrop_path}
              alt={show.movie.title}
            />
            <p>{show.movie.title}</p>
            <p>{show.movie.vote_average.toFixed(1)}</p>
            <p>{show.showPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveShowCard;
