import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";

//import { gamingGadgetsPage1 } from "../Data/GamingGadgets/Gaming1";
import { laptopPage1 } from "../Data/Laptops/laptop1";
import { pcComponentsPage1 } from "../Data/PCComponents/pc1";
import { phonesPage1 } from "../Data/SmartPhones/phoneTab";


const Homepage = () => {
  return (
    <div>
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={laptopPage1} section={"Laptops"} />
        <HomeProductSection
          data={pcComponentsPage1}
          section={"PC components"}
        />
        <HomeProductSection data={phonesPage1} section={"smartphones"} />
      </div>
    </div>
  );
};

export default Homepage;
