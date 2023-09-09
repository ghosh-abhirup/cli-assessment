import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faLink, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

const PostComponent = () => {
  return (
    <div className="w-[30rem] bg-white shadow-lg rounded-lg py-4 px-6 mx-auto">
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
        <p className="text-base sm:text-lg cursor-pointer">Ahuja</p>
      </div>

      <div className="mt-4">
        <p className="text-base sm:text-lg font-semibold mb-2">Great</p>
        <div className="w-full h-[200px] rounded-lg overflow-hidden">
          <Image
            src="/skySunset.jpg"
            width={200}
            height={200}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="line-clamp-3 text-sm sm:text-base mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          recusandae odit quasi, at laborum asperiores esse ea quo sed saepe!
        </p>
      </div>

      <div className="w-full flex justify-between items-center mt-4">
        <div className="like flex gap-2 items-center">
          <FontAwesomeIcon size="xl" icon={faThumbsUp} />
          <p className="font-semibold text-lg">1</p>
        </div>
        <div className="dislike flex gap-2 items-center">
          <FontAwesomeIcon size="xl" icon={faThumbsDown} />
          <p className="font-semibold text-lg">1</p>
        </div>
        <div className="comment flex gap-2 items-center">
          <FontAwesomeIcon size="xl" icon={faCommentDots} />
          <p className="font-semibold text-lg">2</p>
        </div>

        <FontAwesomeIcon size="xl" icon={faLink} />

        <div className="comment flex gap-2 items-center">
          <FontAwesomeIcon size="xl" icon={faShareFromSquare} />
          <p className="font-semibold text-lg">2</p>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
