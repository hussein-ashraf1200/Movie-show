import React from "react";
import Card from "../components/Card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Trailers from "../components/Trailers";
import ShowMoreButton from "../components/ShowMoreButton";
import BlurCircle from "../components/BlurCircle";

const Showing = () => {
  const navgate = useNavigate();
  const viewHandell = () => {
    navgate("/moveis");
  };
  return (
    <div className="flex justify-center  items-center flex-col ">
      <div className="flex justify-around w-full items-center mt-4">
        <div className="flex justify-around sm:gap-96 w-full items-center ">
          <h1>Now Showing</h1>
          <button
            className="flex flex-row items-center justify-center gap-3 cursor-pointer group"
            onClick={viewHandell}
          >
            View All
            <ArrowRight
              className="transition-transform duration-300 transform 
            group-hover:translate-x-2"
            />
          </button>
        </div>
      </div>
      <BlurCircle top="680px" left="0px" />
      <BlurCircle top="980px" right="0px" />

      {/* card */}
      <Card />

      <ShowMoreButton />

      <Trailers />
    </div>
  );
};

export default Showing;
