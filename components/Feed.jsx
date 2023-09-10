import PostComponent from "./PostComponent";

const Feed = () => {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <p className="font-bold text-2xl leading-6 text-center w-full mb-6 ">
        Feed Posts
      </p>

      <PostComponent />
    </div>
  );
};

export default Feed;
