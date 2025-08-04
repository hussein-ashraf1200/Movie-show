import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const Seats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    window.scroll(0, 0);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) => {
      const alreadySelected = prev.includes(seat);
      const newSelection = alreadySelected
        ? prev.filter((s) => s !== seat) // إزالة
        : [...prev, seat]; // إضافة

      if (newSelection.length > 5) {
        toast("You can't select more than 5 seats");
        return prev; // لا تغيّر إذا تعدى الحد
      }

      return newSelection;
    });
  };

  const chairsAB = [];
  for (let row = 65; row <= 66; row++) {
    const letter = String.fromCharCode(row);
    for (let number = 1; number <= 9; number++) {
      chairsAB.push(`${letter}${number}`);
    }
  }

  const chairsCD = [];
  for (let row = 67; row <= 68; row++) {
    const letter = String.fromCharCode(row);
    for (let number = 1; number <= 9; number++) {
      chairsCD.push(`${letter}${number}`);
    }
  }

  const chairsEF = [];
  for (let row = 69; row <= 70; row++) {
    const letter = String.fromCharCode(row);
    for (let number = 1; number <= 9; number++) {
      chairsEF.push(`${letter}${number}`);
    }
  }

  const chairsGH = [];
  for (let row = 71; row <= 72; row++) {
    const letter = String.fromCharCode(row);
    for (let number = 1; number <= 9; number++) {
      chairsGH.push(`${letter}${number}`);
    }
  }

  const chairsIJ = [];
  for (let row = 73; row <= 74; row++) {
    const letter = String.fromCharCode(row);
    for (let number = 1; number <= 9; number++) {
      chairsIJ.push(`${letter}${number}`);
    }
  }

  const renderSeats = (seats) =>
    seats.map((seat) => (
      <div
        onClick={() => toggleSeat(seat)}
        key={seat}
        className={`cursor-pointer border border-primary p-2 rounded-sm 
          ${
            selectedSeats.includes(seat)
              ? "bg-primary text-white"
              : "bg-[#210F14] text-white hover:bg-[#4C1A24]"
          }`}
      >
        {seat}
      </div>
    ));

  return !isloading ? (
    <div className="space-y-10 text-[14px] mb-40">
      <div className="w-full flex items-center justify-center ">
        <svg width="600" height="120" viewBox="0 0 400 120">
          <path
            d="M 0 100 Q 200 60 400 100"
            fill="none"
            stroke="#501B26"
            strokeWidth="10"
          />
          <text
            x="200"
            y="115"
            textAnchor="middle"
            fill="#7A808B"
            fontSize="12"
          >
            SCREEN SIDE
          </text>
        </svg>
      </div>

      {/* القسم الأول */}
      <div className="flex justify-center items-center">
        <div className="p-4 rounded w-fit">
          <div className="grid grid-cols-9 gap-2">{renderSeats(chairsAB)}</div>
        </div>
      </div>

      <div className=" relative">
        <div className="flex justify-center items-center">
          <div className="p-4 rounded w-fit">
            <div className="grid grid-cols-9 gap-2">
              {renderSeats(chairsCD)}
            </div>
          </div>

          <div className="p-4 rounded w-fit">
            <div className="grid grid-cols-9 gap-2">
              {renderSeats(chairsEF)}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="p-4 rounded w-fit">
            <div className="grid grid-cols-9 gap-2">
              {renderSeats(chairsGH)}
            </div>
          </div>

          <div className="p-4 rounded w-fit">
            <div className="grid grid-cols-9 gap-2">
              {renderSeats(chairsIJ)}
            </div>
          </div>
        </div>
        <button
          className=" absolute right-[38%] top-[110%] bg-[#D63854] text-white text-sm px-4 py-2 rounded-xl
       hover:bg-[#b72d46] transition-colors w-44 cursor-pointer"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Seats;
