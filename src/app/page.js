import Banner from "@/app/components/Banner";
import Header from "@/app/components/Header/Header";
import SmallCard from "@/app/components/SmallCard";
import MediumCard from "@/app/components/MediumCard";
import LargeCard from "@/app/components/LargeCard";
import Footer from "@/app/components/Footer";

async function getFetchData(url) {
  // const res = await fetch("https://links.papareact.com/pyp");
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const exploreData = await getFetchData("https://www.jsonkeeper.com/b/4G1G");
  const cardsData = await getFetchData("https://www.jsonkeeper.com/b/VHHT");

  return (
    <div className="relative">
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-10">
          <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 gap-x-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section className="pt-10">
          <h2 className="text-3xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3 ">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          btnText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}
