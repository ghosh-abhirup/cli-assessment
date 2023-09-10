"use client";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faLink, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

const PostComponent = ({ data }) => {
  return (
    <div className="w-full sm:w-[30rem] bg-white shadow-lg rounded-lg py-4 px-6 mx-auto">
      <div className="flex gap-2 items-center">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <Image
            src="/user-dummy.png"
            width={40}
            height={40}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-base sm:text-lg cursor-pointer">{data.username}</p>
      </div>

      <div className="mt-4">
        <p className="text-base sm:text-lg font-semibold mb-2">{data.title}</p>
        <div className="w-full h-[150px] sm:h-[300px] rounded-lg overflow-hidden">
          <img
            src={data.postImage}
            alt="image"
            className="w-full sm:w-fit h-full object-cover mx-auto"
          />
        </div>
        <p className="line-clamp-3 text-sm sm:text-base mt-2">
          {data.description}
        </p>
      </div>

      <div className="w-full flex justify-between items-center mt-4">
        <div className="like postLinks">
          <FontAwesomeIcon icon={faThumbsUp} className="cursor-pointer" />
          <p className="font-semibold text-sm sm:text-lg">{data.likes}</p>
        </div>
        <div className="dislike postLinks">
          <FontAwesomeIcon
            icon={faThumbsDown}
            className="cursor-pointer fa-sm sm:fa-xl"
          />
          <p className="font-semibold text-sm sm:text-lg">{data.dislikes}</p>
        </div>
        <div className="comment postLinks">
          <FontAwesomeIcon
            icon={faCommentDots}
            className="cursor-pointer fa-sm sm:fa-xl"
          />
          <p className="font-semibold text-sm sm:text-lg">{data.comments}</p>
        </div>

        <FontAwesomeIcon
          icon={faLink}
          className="cursor-pointer fa-sm sm:fa-xl"
        />

        <div className="share postLinks">
          <FontAwesomeIcon
            icon={faShareFromSquare}
            className="cursor-pointer fa-sm sm:fa-xl"
          />
          <p className="font-semibold text-sm sm:text-lg">2</p>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
