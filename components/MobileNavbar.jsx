"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChartColumn,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { faCommentDots, faHeart } from "@fortawesome/free-regular-svg-icons";

const MobileNavbar = () => {
  return (
    <div className="fixed w-full bottom-0 left-0 px-6 py-4 bg-white flex items-center justify-between">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="xl"
        className="cursor-pointer"
      />
      <FontAwesomeIcon size="xl" icon={faHeart} className="cursor-pointer" />
      <FontAwesomeIcon
        size="xl"
        icon={faSquarePlus}
        className="cursor-pointer"
        color="red"
      />
      <FontAwesomeIcon
        size="xl"
        icon={faChartColumn}
        className="cursor-pointer"
      />
      <FontAwesomeIcon
        size="xl"
        icon={faCommentDots}
        className="cursor-pointer"
      />
    </div>
  );
};

export default MobileNavbar;
