"use client";
import Image from "next/image";

const RecommendationSlider = ({ data }) => {
  return (
    <>
      <p className="font-bold text-2xl leading-6 text-center w-full mb-4">
        Team recommendation for you
      </p>
      <div className="w-full sm:w-[30rem] mx-auto team-scroller">
        {data.map((team, index) => (
          <div
            className=" flex flex-col items-center gap-2 rounded-lg border-2 border-black/[0.2] p-4 "
            key={index}
          >
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
              <Image
                src="/user-dummy.png"
                width={60}
                height={60}
                alt="image"
                className="w-full h-full object-cover "
              />
            </div>

            <p className="font-bold text-base line-clamp-1">{team}</p>
            <button className="joinBtn w-full">Join</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendationSlider;
