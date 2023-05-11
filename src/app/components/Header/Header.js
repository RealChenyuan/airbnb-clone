"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Calender from "./Calender";
import { useRouter } from "next/navigation";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchHint, setSearchHint] = useState("Start your search");
  const router = useRouter();

  useEffect(() => {
    setSearchHint(placeholder || "Start your search");
  }, [placeholder]);

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-10 py-5 md:px-20">
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          fill={true}
          alt="airbnb logo"
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400 w-full"
          type="text"
          placeholder={searchHint}
        />
        <SearchIcon className="hidden md:inline-flex w-8 bg-red-400 text-white rounded-full p-1.5 md:mx-2 cursor-pointer" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="w-6" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="w-6" />
          <UserCircleIcon className="w-6" />
        </div>
      </div>

      {searchInput && (
        <Calender resetInput={resetInput} location={searchInput} />
      )}
    </header>
  );
}

export default Header;
