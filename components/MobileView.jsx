import React from "react";
import Feed from "./Feed";
import RecommendationSlider from "./RecommendationSlider";
import { teamRecommendation } from "@/public/data";
import MobileSlider from "./MobileSlider";

const MobileView = () => {
  return (
    <div className=" w-full h-full flex flex-col items-center">
      <MobileSlider data={teamRecommendation} />
      <Feed />
    </div>
  );
};

export default MobileView;
