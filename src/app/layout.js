import "../styles/globals.css";
import { Inter } from "next/font/google";

import "mapbox-gl/dist/mapbox-gl.css";

import ProgressBar from "@badrap/bar-of-progress";
import { AIRBNB_COLOR } from "@/config/config";
import { Router } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// const progress = new ProgressBar({
//   size: 4,
//   color: AIRBNB_COLOR,
//   className: "z-50",
//   delay: 100,
// });

// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);

export const metadata = {
  title: "Yuan's Airbnb",
  description: "An Airbnb-clone app created by Chen Yuan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
