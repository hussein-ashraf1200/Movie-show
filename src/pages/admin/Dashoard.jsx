import {
  ChartLine,
  CircleDollarSign,
  CirclePlay,
  Star,
  StarIcon,
  Users,
} from "lucide-react";
import { dummyDashboardData } from "../../assets/assets";
import ActiveShow from "./ActiveShow";
import BuyTechits from "../../components/BuyTechits";
import MovieDetails from "../../components/MovieDetails";

const Dashoard = () => {
  const { totalBookings, totalRevenue, totalUser, activeShows } =
    dummyDashboardData;
  return (
    <div className="">
      <h1 className="text-2xl">
        Admin <span className="text-red-500 underline">Dashboard</span>
      </h1>
      <div className="grid w-fit sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-4   gap-3">
        <div className="bg-[#210F14] border mt-6  border-primary w-60 h-20  rounded-sm p-4 flex justify-around gap-4 items-center">
          <div>
            <p>Total Bookings</p>
            <p className="font-bold">{totalBookings}</p>
          </div>
          <ChartLine />
        </div>
        <div className="bg-[#210F14] border mt-6  border-primary w-60 h-20  rounded-sm p-4 flex justify-around gap-4 items-center">
          <div>
            <p>Total Revenue</p>
            <p className="font-bold">${totalRevenue}</p>
          </div>
          <CircleDollarSign />
        </div>
        <div className="bg-[#210F14] border mt-6  border-primary w-60 h-20  rounded-sm p-4 flex justify-around gap-4 items-center">
          <div>
            <p>Active Shows</p>
            <p className="font-bold">{activeShows.length}</p>
          </div>
          <CirclePlay />
        </div>
        <div className="bg-[#210F14] border mt-6  border-primary w-60 h-20  rounded-sm p-4 flex justify-around gap-4 items-center">
          <div>
            <p>Total Users</p>
            <p className="font-bold">{totalUser}</p>
          </div>
          <Users />
        </div>
        {/* card */}
        <div className="felx justify-center items-center">
          <p className="mt-10 text-lg font-medium">Active Shows</p>
          <div className=" relative grid grid-cols-1 md:grid-cols-2 sm:w-[400px] lg:w-[1100px] lg:grid-cols-3  gap-6 mt-4 max-w-2xl">
            {dummyDashboardData.activeShows.map((show) => (
              <div
                id={show._id}
                className="w-55 rounded-lg overflow-hidden  pb-3 bg-primary/10 border
               border-primary/20 hover:-translate-y-1 transition duration-300 "
              >
                <img
                  src={show.movie.poster_path}
                  className="h-60 w-full object-cover"
                  alt=""
                />
                <p className="font-medium p-2 truncate">{show.movie.title}</p>

                <div className="flex items-center justify-between px-2">
                  <p>${show.showPrice}</p>
                  <p className="flex justify-center items-center gap-1 text-sm text-gray-400 mt-1 pr-1 ">
                    <StarIcon className="w-4 h-4 text-primary fill-primary" />
                    {show.movie.vote_average.toFixed(1)}
                  </p>
                </div>
                <p className="text-center  mt-4">
                  {new Date(show.showDateTime).toLocaleString("en-US", {
                    weekday: "short",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashoard;
