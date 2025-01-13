import React from "react";
import MainCrosel from "../../components/homeCarosel/MainCrosel";

import HomeSectionCrousel from "../../components/homeSectionCrousel/HomeSectionCrousel";
import { lehngacholiPage2 } from "../../../Data/Saree/lenghaCholiPage2";

const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div className=" space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCrousel data={lehngacholiPage2} sectionName={"lehengas"} />
        <HomeSectionCrousel data={lehngacholiPage2} sectionName={"lehengas"} />
        <HomeSectionCrousel data={lehngacholiPage2} sectionName={"mens"} />
        <HomeSectionCrousel data={lehngacholiPage2} sectionName={"lehengas"} />
      </div>
    </div>
  );
};

export default HomePage;
