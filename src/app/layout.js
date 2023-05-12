import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { AIRBNB_COLOR } from "./config/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yuan's Airbnb",
  description: "An Airbnb-clone app created by Chen Yuan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color={AIRBNB_COLOR} showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
