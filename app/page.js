"use client";
import DesktopView from "@/components/DesktopView";
import MobileView from "@/components/MobileView";

export default function Home() {
  return (
    <div className="bg-white h-full w-full ">
      <div className="hiddenInMobile w-full h-full">
        <DesktopView />
      </div>
      <div className="hiddenInDesktop w-full h-full">
        <MobileView />
      </div>
    </div>
  );
}
