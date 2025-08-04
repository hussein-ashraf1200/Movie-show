import React, { useEffect, useState } from "react";
import HeroSections from "./HeroSections";
import Showing from "./Showing";
import Loading from "../components/Loading";

const Home = () => {
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, []);
  return !isloading ? (
    <div>
      <HeroSections />
      <Showing />
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
