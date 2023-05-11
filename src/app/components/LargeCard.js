import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, btnText }) {
  return (
    <section className="relative my-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
          alt={description}
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-3xl mb-3 w-64 font-semibold">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {btnText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
