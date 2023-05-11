/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiY2hlbnlhbjI5IiwiYSI6ImNsaGhzNHgzMTAwd2IzbXFvamxtcjJjaG4ifQ.Cvw5wSsXaVYxLZijs0VpsQ",
  },
};

module.exports = nextConfig;
