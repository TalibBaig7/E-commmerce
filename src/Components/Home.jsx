import React from "react";

import HeroSection from "./Herosection";
import BrandSection from "./BrandSection";
import Card from "./Card";
import Cardtwo from "./Cardtwo";
import Browse from "./Browse";

function Home() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white">
      <HeroSection />
      <BrandSection />
      <Card />
      <Cardtwo />
      <Browse />
    </div>
  );
}

export default Home;
