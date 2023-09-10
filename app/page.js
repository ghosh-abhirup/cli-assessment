"use client";

import DesktopScreen from "../components/DesktopScreen";
import MobileScreen from "../components/MobileScreen";

export default function Home() {
  return (
    <div className="bg-white h-full w-full ">
      <div className="hiddenInMobile w-full h-full">
        <DesktopScreen />
      </div>
      <div className="hiddenInDesktop w-full h-full">
        <MobileScreen />
      </div>
    </div>
  );
}
