import React from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import HeroSection from "./Herosection";
import BrandSection from "./BrandSection";
import Card from "./Card";
import Cardtwo from "./Cardtwo";
import Browse from "./Browse";

function Home() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white">
      <TopBar />
      <NavBar />
      <HeroSection />
      <BrandSection />
      <Card />
      <Cardtwo />
      <Browse />
    </div>
  );
}

export default Home;
