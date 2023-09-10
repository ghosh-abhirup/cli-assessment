"use client";
import Image from "next/image";

const InfiniteScrollBox = ({ data, heading, title }) => {
  return (
    <div className="w-full">
      <p className="text-xl font-semibold text-black mb-2">{heading}</p>
      <div className="bg-white w-[90%] rounded-lg overflow-y-auto max-h-[300px] drop-shadow-lg">
        {data.map((team, index) => {
          return (
            <div
              className="w-full h-fit px-6 py-4 flex items-center justify-between"
              key={index}
            >
              <div className="flex gap-2 items-center">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                  <Image
                    src={title == "team" ? "/skySunset.jpg" : "/user-dummy.png"}
                    width={40}
                    height={40}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="truncate w-[12rem] cursor-pointer">{team}</p>
              </div>
              <button className="joinBtn">Join</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteScrollBox;
