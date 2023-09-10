"use client";
import DesktopVIew from "@/components/DesktopVIew";
import MobileView from "@/components/MobileView";

export default function Home() {
  return (
    <div className="bg-white h-full w-full ">
      <div className="hiddenInMobile w-full h-full">
        <DesktopVIew />
      </div>
      <div className="hiddenInDesktop w-full h-full">
        <MobileView />
      </div>
    </div>
  );
}
