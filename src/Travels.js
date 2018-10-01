import React from "react";
import Travel from "./Travel";
// src/Quotes.js
const travels = [
  {
    destination: "Maghreb",
    country: "Morocco",
    image: "https://www.beeventsensation.fr/wp-content/uploads/2018/01/Be-Event-Sensation-Maroc.jpg",
    distance: "2324 km"
  },
  {
    destination: "North America",
    country: "USA",
    image: "https://static.service-voyages.com/photos/circuit-etats-unis/new-york/i-love-new-york_272509_pgbighd.jpg",
    distance: "7661 km"
  },
  {
    destination: "Europe",
    country: "Portugal",
    image: "http://images.salaun-holidays.com/(Image)-image-portugal-algarve-2015-05.jpg",
    distance: "1340 km"
  },
  {
    destination: "Europe",
    country: "United Kingdom",
    image: "https://images.salaun-holidays.com/(Vignette)-vignette-Angleterre-Londres-7-2017.jpg",
    distance: "975 km"
  },
  {
    destination: "Asia",
    country: "Indonesia",
    image: "https://img2.pleinevie.fr/var/pleinevie/storage/images/article/une-ile-au-soleil-pour-partir-cet-hiver-bali-16634/103172-1-fre-FR/Une-ile-au-soleil-pour-partir-cet-hiver-Bali_width1024.jpg",
    distance: "11 714 km"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel {...travel} />
                
    ))}
  </div>
);

export default Travels;