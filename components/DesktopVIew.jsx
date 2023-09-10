"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import InfiniteScrollBox from "@/components/InfiniteScrollBox";
import { topTeamOfTheWeek, topUsers, teamRecommendation } from "@/public/data";
import Feed from "@/components/Feed";
import RecommendationSlider from "./RecommendationSlider";

const DesktopVIew = () => {
  return (
    <>
      <div className="flex gap-2 w-full py-4 px-4 flex-wrap">
        <div className=" col_1 w-[20rem] h-screen overflow-y-auto flex flex-col gap-6 items-start">
          <Navigation />

          <div className="trendingTopic w-full">
            <p className="text-base font-semibold">
              Trending Topics of the Week
            </p>
            <div className="w-[90%] rounded-lg overflow-hidden mt-2">
              <Image
                src="/navbarIcon.jpg"
                width={100}
                height={100}
                alt="trending"
                className="w-full object-cover"
              />
            </div>
            <div className="w-[90%] rounded-lg overflow-hidden mt-2">
              <Image
                src="/skySunset.jpg"
                width={100}
                height={100}
                alt="trending"
                className="w-full object-cover"
              />
            </div>
            <div className="w-[90%] rounded-lg overflow-hidden mt-2">
              <Image
                src="/navbarIcon.jpg"
                width={100}
                height={100}
                alt="trending"
                className="w-full object-cover"
              />
            </div>
            <div className="w-[90%] rounded-lg overflow-hidden mt-2">
              <Image
                src="/skySunset.jpg"
                width={100}
                height={100}
                alt="trending"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="col_2 w-full h-screen overflow-y-auto flex-1 mr-4">
          <RecommendationSlider data={teamRecommendation} />
          <Feed />
        </div>

        <div className=" col_3 w-[25rem] h-screen overflow-y-auto flex flex-col gap-6 justify-between items-start">
          <InfiniteScrollBox
            data={topTeamOfTheWeek}
            heading=" Top Global Users of the week"
            title="team"
          />
          <div className="w-full mt-5">
            <InfiniteScrollBox
              data={topUsers}
              heading=" Top Global Users of the week"
              title="user"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopVIew;
