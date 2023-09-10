"use client";
import PostComponent from "./PostComponent";
import { feedPosts } from "@/public/data";

const Feed = () => {
  return (
    <div className="w-full">
      <p className="font-bold text-lg sm:text-2xl leading-6 text-center w-full my-4 ">
        Feed Posts
      </p>

      <div className=" flex flex-col gap-4">
        {feedPosts.map((post) => (
          <PostComponent data={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
