import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import InfiniteScrollBox from "@/components/InfiniteScrollBox";
import { topTeamOfTheWeek, topUsers } from "@/public/data";

export default function Home() {
  return (
    <div className="bg-white max-h-screen overflow-hidden">
      <Navbar />
      <div className="flex gap-2 w-full mt-4 px-4">
        <div className="col_1 w-[20rem] max-h-[600px] overflow-y-auto flex flex-col gap-6 justify-between items-start">
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
          </div>
        </div>

        <div className="col_2 flex-1 mr-4">
          <p className="font-bold text-2xl leading-6">My Feed</p>
        </div>

        <div className="col_3 w-[25rem] max-h-[600px] overflow-y-auto flex flex-col gap-6 justify-between items-start">
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
    </div>
  );
}
