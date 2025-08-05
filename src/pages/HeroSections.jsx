import React from "react";
import { assets } from "../assets/assets";
import { CalendarIcon, Timer } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const HeroSections = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[url('/backgroundImage.png')] bg-cover bg-center 
      min-h-screen w-full flex items-center lg:p-40 p-2"
    >
      <div className="space-y-6">
        <img loading="lazy" src={assets.marvelLogo} alt="marvelLogo" />
        <h1 className="sm:text-6xl text-4xl font-semibold">
          Guardians <br />
          of the Galaxy
        </h1>
        <div className="flex flex-col sm:flex-row items-center sm:gap-3.5 gap-1.5">
          <span>Action | Adventure | Sci-Fi</span>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4" /> 2018
          </div>
          <div className="flex items-center">
            <Timer className="w-4 h-4" /> 2018
          </div>
        </div>
        <p className="max-w-md text-justify leading-relaxed  ">
          In a post-apocalyptic world where cities ride on wheels and consume
          each other to survive, two people meet in London and try to stop a
          conspiracy.
        </p>
        <button
          onClick={() => navigate("/moveis")}
          className="bg-[#D63854] cursor-pointer sm:h-10 h-8 sm:w-[200px] w-[160px] flex justify-center items-center p-2 rounded-2xl"
        >
          Explore Movies
        </button>
      </div>
    </div>
  );
};

export default HeroSections;
