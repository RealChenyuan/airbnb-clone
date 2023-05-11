import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import Houses from "../components/Houses";
import Map from "../components/Map";

import React from "react";

async function getSearchResults() {
  const res = await fetch(
    "https://react-http-87d82-default-rtdb.firebaseio.com/houses.json",
    { cache: "no-store" }
  );
  const searchResults = await res.json();

  return searchResults;
}

async function SearchPage() {
  const searchResults = (await getSearchResults())["-NV4YYxDCLzIVPJCQAeV"];

  return (
    <div>
      <Header />
      <main className="flex">
        <Houses houseItems={searchResults} />

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map houseItems={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SearchPage;
