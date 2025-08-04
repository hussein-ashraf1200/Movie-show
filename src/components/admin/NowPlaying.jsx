import React, { useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import { BoxSelect, CheckIcon, Star } from "lucide-react";
import { Convert } from "./Convert";

const NowPlaying = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="py-6">
      <div className="overflow-x-auto flex gap-4 mt-4 px-2 pb-2">
        {dummyShowsData.map((show, index) => (
          <div
            key={index}
            className="relative min-w-[160px] h-60 rounded-xl overflow-hidden 
      bg-cover bg-center shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer"
            style={{ backgroundImage: `url(${show.backdrop_path})` }}
            onClick={() => setSelected(show.id)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Rating */}
            <div className="absolute bottom-10 left-2 flex items-center gap-1 text-white text-sm">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <p>{show.vote_average.toFixed(1)}</p>
            </div>

            {/* Vote count */}
            <div className="absolute bottom-10 right-2 flex items-center gap-1 text-white text-sm">
              <p>{Convert(show.vote_count)} votes</p>
            </div>

            {/* Title */}
            <div className="absolute bottom-4 left-2 right-2">
              <h1 className="text-white text-base font-semibold truncate">
                {show.title}
              </h1>
            </div>

            {/* Release date */}
            <div className="absolute -bottom-1 left-2 right-2 text-white text-xs">
              {show.release_date}
            </div>

            {/* Selected check icon */}
            {selected === show.id && (
              <div className="absolute top-2 right-2 flex items-center justify-center bg-primary h-6 w-6 rounded">
                <CheckIcon
                  className="w-4 h-4 text-gray-600"
                  strokeWidth={2.5}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
