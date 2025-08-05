import { Heart, PlayCircleIcon, Star } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import { dummyCastsData } from "../assets/assets";
import BlurCircle from "../components/BlurCircle";
import SelectedDate from "../components/SelectedDate";
import Loading from "../components/Loading";
import { useState } from "react";
import { useEffect } from "react";
const Selections = () => {
  const location = useLocation();
  const selectedMovie = location.state;
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    window.scroll(0, 0);
  });

  useEffect(() => {
    // Simulate loading time (e.g. fetching data or animation)
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);

  // دالة لتحديد الممثلين من dummyCastsData حسب اسم الفيلم
  const getFallbackCasts = (title) => {
    const castsMap = {
      "In the Lost Lands": dummyCastsData.slice(0, 10),
      "Until Dawn": dummyCastsData.slice(17, 20),
      "Lilo & Stitch": dummyCastsData.slice(20, 23),
      Havoc: dummyCastsData.slice(23, 26),
      "A Minecraft Movie": dummyCastsData.slice(26, 29),
      "Mission: Impossible - The Final Reckoning": dummyCastsData.slice(29, 32),
      "Thunderbolts*": dummyCastsData.slice(32, 35),
    };

    return castsMap[title] || dummyCastsData.slice(0, 10);
  };

  const castToShow =
    selectedMovie?.casts?.length > 0
      ? selectedMovie.casts
      : getFallbackCasts(selectedMovie?.title);

  return !isloading ? (
    <div className="text-white p-6 mt-20 flex flex-col justify-center items-center ">
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-start ">
        <img
          loading="lazy"
          src={selectedMovie?.backdrop_path}
          alt="Movie Poster"
          className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
        />
        <div className="flex flex-col gap-5">
          <p className="text-primary">ENGLISH</p>
          <h1 className="text-5xl font-semibold max-w-96 text-balance">
            {selectedMovie?.title}
          </h1>

          <div className="flex items-center text-[#F84565] gap-1">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium text-white">
              {selectedMovie?.vote_average?.toFixed(1)} User Rating
            </span>
          </div>
          <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
            {selectedMovie?.overview}
          </p>
          <div className="text-white text-2xl leading-relaxed mt-4 space-y-1">
            <MovieDetails
              runtime={selectedMovie?.runtime}
              release_date={selectedMovie?.release_date}
              genres={selectedMovie?.genres}
            />
          </div>
          <BlurCircle top="380px" left="0px" />

          <div className="flex items-center flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95">
              <PlayCircleIcon className={`w-5 h-5`} />
              Watch Trailer
            </button>
            <a
              href=""
              className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95"
            >
              Buy Tickets
            </a>
            <button className="bg-gray-700 p-2.5 rounded-full transition  cursor-pointer active:scale-95">
              <Heart className={`w-5 h-5`} />
            </button>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <h2 className="text-2xl font-semibold mb-4 mt-5 text-white">Top Cast</h2>
      <div className="mt-10 w-full justify-center items-center">
        <div className="flex    gap-2 justify-center items-center">
          {castToShow.slice(0, 4).map((actor, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 rounded-lg shadow-md 
              hover:scale-105 transition-transform"
            >
              <img
                loading="lazy"
                src={actor.profile_path}
                alt={actor.name}
                className="w-12 h-12 object-cover rounded-full border-2 border-primary"
              />
              <p className="mt-2 text-sm font-medium text-white text-center">
                {actor.name}
              </p>
            </div>
          ))}
        </div>
        <SelectedDate />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Selections;
