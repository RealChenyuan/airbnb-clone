"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import Houses from "../components/Houses";
import Map from "../components/Map";

import React, { use, useState, useEffect } from "react";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";

async function getSearchResults() {
  const res = await fetch(
    "https://react-http-87d82-default-rtdb.firebaseio.com/houses.json"
  );
  const searchResults = await res.json();

  return searchResults;
}

function SearchPage() {
  const params = useSearchParams();
  const location = params.get("location");
  const startDate = params.get("startDate");
  const endDate = params.get("endDate");
  const guestNum = +params.get("guestNum");

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const [houseItems, setHouseItems] = useState([]);
  const searchResults = use(getSearchResults())["-NV4YYxDCLzIVPJCQAeV"];

  // useEffect(() => {
  //   const searchResults = use(getSearchResults())["-NV4YYxDCLzIVPJCQAeV"];
  //   setHouseItems(searchResults);
  // });

  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const data = use(getSearchResults())["-NV4YYxDCLzIVPJCQAeV"];
  //   setSearchResults(data);
  // }, []);

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${
          guestNum === 1 ? "1 guest" : `${guestNum} guests`
        }`}
      />
      <main className="flex">
        <Houses
          range={range}
          location={location}
          guestNum={guestNum}
          houseItems={searchResults}
        />

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map houseItems={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SearchPage;
