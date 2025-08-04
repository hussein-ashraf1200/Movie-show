import React from "react";

const MovieDetails = ({ release_date, genres, runtime }) => {
  return (
    <p className="text-sm text-gray-400">
      {new Date(release_date).getFullYear()} •{" "}
      {genres.map((g) => g.name).join(" | ")} • {runtime}m
    </p>
  );
};

export default MovieDetails;
