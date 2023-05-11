"use client";

import React from "react";
import InfoCard from "./InfoCard";
import usePathData from "../../../hooks/use-path";

function Houses({ houseItems }) {
  const { location, range, guestNum } = usePathData();

  return (
    <section className="flex-grow pt-14 px-10">
      <p className="text-xs">
        300+ Stays ▪ {range} ▪ for{" "}
        {guestNum === 1 ? "1 guest" : `${guestNum} guests`}
      </p>

      <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

      <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
        <p className="button">Cancellation Flexibility</p>
        <p className="button">Type of Place</p>
        <p className="button">Price</p>
        <p className="button">Rooms and Beds</p>
        <p className="button">More filters</p>
      </div>

      <div className="flex flex-col">
        {houseItems.map(
          ({ img, location, title, description, star, price, total }) => (
            <InfoCard
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Houses;
