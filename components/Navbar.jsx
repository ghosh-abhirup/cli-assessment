"use client";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    // <div className="w-full bg-white fixed  px-4 py-4">
    <div className="fixed top-0 left-0 z-[100] shadow-lg flex w-full justify-between items-center px-4 py-4 bg-white">
      <div className=" flex gap-2 items-center">
        <div className="imgContainer rounded-full w-[40px] h-[40px] overflow-hidden border-2 border-black">
          <Image
            src="/navbarIcon.jpg"
            alt="navbarIcon"
            width={40}
            height={40}
            className="object-cover h-full w-full"
          />
        </div>
        <Link
          href={"/"}
          className="text-base sm:text-lg font-semibold text-black"
        >
          Grupverse
        </Link>
      </div>

      <div className="links hidden sm:flex gap-4 text-black items-center ">
        <p className="linkText">Home</p>
        <p className="linkText">About Us</p>
        <p className="linkText">Contact Us</p>
        <p className="linkText">Help</p>
      </div>
      <div className="flex gap-6 items-center">
        <div className="hidden sm:block">
          <SearchBar />
        </div>
        <FontAwesomeIcon
          icon={faMicrophone}
          size="lg"
          className="hidden sm:block cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faBell}
          size="lg"
          className="hidden sm:block cursor-pointer"
        />
        <div className="userBg ">
          <FontAwesomeIcon
            size="2xl"
            icon={faUser}
            className="absolute left-1/2 -translate-x-1/2 top-[10px]"
            color="#6c757d"
          />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
