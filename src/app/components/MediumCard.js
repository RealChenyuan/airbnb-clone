import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-64 w-64">
        <Image src={img} fill={true} className="rounded-xl" alt={title} />
      </div>
      <h3 className="text-xl mt-3 font-semibold">{title}</h3>
    </div>
  );
}

export default MediumCard;
