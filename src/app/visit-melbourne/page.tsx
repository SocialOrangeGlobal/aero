"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export default function VisitMelbournePage() {
  const attractions = [
    {
      title: "Eureka Skydeck 88",
      description: "Located on the banks of the Yarra River, Eureka is perfectly positioned for a 360 degree, floor-to-ceiling view of Melbourne's CBD, sports precinct and beyond. With a range of activities for the entire family, Eureka is Melbourne's must see attraction.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Skydeck.jpg"
    },
    {
      title: "Queen Victoria Markets",
      description: "The Queen Victoria Market has been the heart and soul of Melbourne for more than a century. A historic landmark spread over two city blocks, it's a vibrant and bustling inner-city Market where you can shop for everything from Australian fruit and vegetables, and local and imported gourmet foods, to cosmetics, clothing and souvenirs.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Queen-Vic-Markets-1024x680-1.jpg"
    },
    {
      title: "Melbourne Museum",
      description: "Melbourne Museum showcases Australian social history, Indigenous cultures, science and the environment. Located adjacent to the World Heritage listed Royal Exhibition Building and Carlton Gardens, and home to IMAX theatre Melbourne.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Museum.jpg"
    },
    {
      title: "Royal Botanical Gardens",
      description: "The Royal Botanical Gardens Melbourne is a treasured part of Melbourne's cultural life and a valuable asset to the heritage-rich city. With its stunning vistas, tranquil lakes and diverse plant collections, the Gardens are a place of continual discovery and delight. The Royal Botanical Gardens Melbourne holds a number of walks and tours.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Botanic-Gardens.jpg"
    },
    {
      title: "Melbourne Aquarium",
      description: "Home to thousands of aquatic animals, including one of Australia's largest Saltwater Crocodiles, SEA LIFE Melbourne Aquarium takes you on an interactive adventure from the depths of the ocean to the icy waters of Antarctica.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Aquarium.jpg"
    },
    {
      title: "Federation Square",
      description: "Home to major cultural attractions, world-class events, tourism experiences and an exceptional array of restaurants, bars and specialty stores, this modern piazza has become the city's meeting place. Federation Square hosts over 2000 events each year. Life at Fed Square is so rich that there's sure to always be something exciting going on!",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Yagan-Square.jpg"
    },
    {
      title: "Melbourne Zoo",
      description: "Over 250 species from around the world can be found in the beatifically landscaped Melbourne Zoo, just five minutes from the city. Stroll through Asian and African rainforests, where tigers roam and monkeys swing, take the time to stop and see eye to eye with the beautiful orangutans in their special elevated exhibit.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Zoo.jpg"
    },
    {
      title: "Crown Melbourne",
      description: "Crown is Melbourne's premier entertainment venue. The Crown Entertainment Complex offers a brilliant combination of luxury, warm service and non-stop excitement. Crown boasts over 40 restaurants, cafes, bars, cinemas, an indoor amusement park, a live entertainment theatre and two nightclubs.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Crown.jpg"
    },
    {
      title: "National Gallery of Victoria",
      description: "The National Gallery of Victoria has two magnificent galleries, both with free entry to the permanent collection. Stretching from the top of St Kilda Road across the Yarra River to Federation Square, all within a short stroll from each other.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Gallery.jpg"
    },
    {
      title: "Lygon Street Italian precinct",
      description: "Stroll along leafy Lygon Street and discover Little Italy – the place where Melbourne's famous cafe culture was born.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Lygon-Street.jpg"
    },
    {
      title: "St Kilda",
      description: "Take a stroll or a tram along the city's majestic, tree-lined main artery, a gateway to some of the city's most beautiful parks and well-known landmarks.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/St-Kilda.jpg"
    },
    {
      title: "Yarra Valley",
      description: "Travel through rolling hills strung with vines, secluded natural valleys set against blue mountain backdrops and lush greenery and pastures, past towering trees and pristine rivers to verdant villages like Marysville and Warburton. Dine in style and marvel at the profundity of fresh local produce at tables in Healesville and Yarra Glen.",
      image: "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Yarra-Valley-1024x684-1.jpg"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[220px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">Visit Melbourne</h1>
        </div>
        {/* Swirl Graphic */}
        <div className="hidden md:flex absolute right-[-5%] md:right-0 top-1/2 -translate-y-1/2 h-[200%] md:h-[250%] pointer-events-none items-center justify-end">
          <img
            src="https://conference.eresearch.edu.au/wp-content/uploads/2021/02/Untitled-design.png"
            alt="Decorative swirl"
            className="h-full w-auto object-contain"
          />
        </div>
      </section>

      {/* Getting to and around Melbourne */}
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-700 mb-10">Getting to and around Melbourne</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Flying to Melbourne</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              Melbourne Airport (Tullamarine) is the primary international and domestic airport serving the city of Melbourne and Greater Victoria. an approximate 30-minutes drive from the city centre. There are 4 Terminals covering different destinations and more than 40 airlines.
            </p>
            <a href="#" className="text-[#2b6ca3] hover:underline text-[15px]">Visit Melbourne Airport website</a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Airport Transfers</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              SkyBus provides fast and low-cost airport transfers via the Melbourne Express service, operating all year round to the heart of Melbourne CBD, St Kilda, and the Peninsula Express service. The average trip time is 25 minutes.<br /><br />
              Tickets are card-only and can be purchased via e-kiosks at the airport or on the website.
            </p>
            <a href="#" className="text-[#2b6ca3] hover:underline text-[15px] block mb-6">Visit the Skybus Website</a>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              Taxis are on hand to pick-up arriving passengers with taxi ranks located close to all Terminals. The Melbourne CBD is approximately a 30-minute fare from Melbourne Airport.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Getting around Melbourne</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              There is plenty of transport in Melbourne City to get you out and about. The Myki card will take you around via tram, train and bus. Travel within the central area of Melbourne by tram is free, though you will need a myki card if you plan to start or finish your journey outside this central area. Melbourne is well-served by taxis and rideshares such as: Uber, Didi, Ola.
            </p>
            <a href="#" className="text-[#2b6ca3] hover:underline text-[15px]">Visit the Public Transport Victoria Website</a>
          </div>
        </div>
      </section>

      {/* Eat and Drink in Melbourne */}
      <section className="w-full py-12 px-6 max-w-[1200px] mx-auto">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-700 mb-10">Eat and Drink in Melbourne</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-start">
          <div className="flex flex-col gap-6 text-gray-600 text-[15px] leading-relaxed">
            <p>
              Experience Melbourne's mix of cultures in its myriad restaurants, cafes, bistros and bars. Whether you're after modern, traditional, exotic or homespun flavours – Melbourne's eclectic dining scene offers a startling array of the world's great cuisines, from popular favourites to the truly groundbreaking.
            </p>
            <p>
              Share a drink while snacking on high end tapas in a laneway eatery, take on a Szechuan chilli dish in Chinatown, or break out of the CBD and discover the city's specialist eating destinations – Richmond for Vietnamese, Carlton's 'Little Italy', Fitzroy for Spanish and Brunswick for Lebanese.
            </p>
            <p>
              For recommendations and to view restaurant options, please <a href="#" className="text-[#2b6ca3] hover:underline">click here</a>.
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src="https://conference.eresearch.edu.au/wp-content/uploads/2026/07/158759-56-1-scaled-600x400-1.jpg"
              alt="Eat and Drink in Melbourne"
              className="w-full h-auto object-cover"
            />
            <p className="text-gray-500 text-sm mt-2 italic">© Photo credit to Victoria Content Hub</p>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto flex-grow mb-16">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-700 mb-10">Attractions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {attractions.map((attraction, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="w-full h-[220px] mb-6 overflow-hidden bg-gray-100">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                <strong className="text-[#2b6ca3] font-bold">"{attraction.title}"</strong>, {attraction.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Website Sponsor */}
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto flex flex-col items-center mb-8">
        <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">Website Sponsor</h3>
        <img
          src="https://conference.eresearch.edu.au/wp-content/uploads/2026/05/2026-eResearch-Website-Sponsor-Banner.png"
          alt="Unilab Website Sponsor"
          className="max-w-[700px] h-auto object-contain"
        />
      </section>

      {/* Floating Scroll to Top Button */}
      <button
        className="fixed bottom-6 right-6 bg-gray-400 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>

      <Footer />
    </main>
  );
}
