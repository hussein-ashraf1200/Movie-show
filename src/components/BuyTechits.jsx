import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BuyTechits = ({ vote_average, item }) => {
  const navigate = useNavigate();

  const buttonHandle = () => {
    navigate("/selection", { state: item });
  };

  return (
    <div className="flex items-center justify-between mt-auto pt-4">
      <button
        onClick={buttonHandle}
        className="bg-[#D63854] cursor-pointer text-white text-sm px-4 py-2 rounded-xl hover:bg-[#b72d46] transition-colors"
      >
        Buy Tickets
      </button>

      <div className="flex items-center text-[#F84565] gap-1">
        <Star className="w-5 h-5 fill-current" />
        <span className="text-sm font-medium text-white">
          {vote_average.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default BuyTechits;
