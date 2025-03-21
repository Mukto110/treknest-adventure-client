import React from "react";
import Banner from "../components/Banner";
import TouristSpotSection from "../components/TouristSpotSection";
import TopRatedDestinations from "../components/TopRatedDestinations";
import TravelTips from "../components/TravelTips";

const Home = () => {
  return (
    <div>
      <Banner />
      <TouristSpotSection />
      <TopRatedDestinations />
      <TravelTips />
    </div>
  );
};

export default Home;
