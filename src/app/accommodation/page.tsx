"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import { ChevronUp } from "lucide-react";

export default function AccommodationPage() {
  const pullmanImages = [
    "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Pullman.png",
    "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Pullman-Room-1.png",
    "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Pullman-Room-2.png",
  ];

  const mantraImages = [
    "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Mantra-on-Jolimont.png",
    "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Mantra-on-Jolimont-Room-1.png",
    "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Mantra-on-Jolimont-Room-2.png",
    "https://conference.eresearch.edu.au/wp-content/uploads/2026/07/Mantra-on-Jolimont-Room-3.png",
  ];

  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[200px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[32px] font-semibold tracking-wide">Accommodation</h1>
        </div>
        {/* Swirl Graphic */}
        <div className="hidden md:flex absolute right-[-10%] md:right-[-2%] top-1/2 -translate-y-1/2 h-[200%] md:h-[250%] pointer-events-none items-center justify-end">
          <img
            src="https://conference.eresearch.edu.au/wp-content/uploads/2021/02/Untitled-design.png"
            alt="Decorative swirl"
            className="h-full w-auto object-contain"
          />
        </div>
      </section>

      {/* Conference Accommodation Bookings Section */}
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto">
        <h2 className="text-[24px] font-semibold text-gray-700 mb-6">Conference Accommodation Bookings</h2>
        <p className="text-[14px] text-gray-600 mb-10 leading-relaxed max-w-5xl">
          Accommodation will be held at the following hotels. To access the conference rates, accommodation must be booked as part of your conference registration. We recommend you book at least 60 days prior to the conference as hotels require unsold rooms to be released at 90, 60 and 30 days prior.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[14px] text-gray-600 leading-relaxed">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Accommodation Bookings</h4>
              <p className="mb-4">Conference attendees can book accommodation in our block bookings when registering for the conference.</p>
              <p>If you have already registered, your confirmation email will include a link to add an accommodation booking. Accommodation can only be booked by registered attendees.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Booking Amendments</h4>
              <p>All booking amendments need to be received in writing and emailed to <a href="mailto:mail@conferencedesign.com.au" className="text-brand-orange hover:underline">mail@conferencedesign.com.au</a>.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Cancellations</h4>
              <p className="mb-4">Cancellations and no-shows are subject to the hotel's cancellation policy. Each hotel policy varies, and late cancellations and no-shows may be charged for all the nights booked.</p>
              <p>Please check the individual cancellation policies listed with each hotel. Cancellations must be received in writing and emailed to <a href="mailto:mail@conferencedesign.com.au" className="text-brand-orange hover:underline">mail@conferencedesign.com.au</a>.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Accommodation Release – 30 Days</h4>
              <p>Accommodation will be held until 30 days prior to the conference when all unsold rooms will be released. After this date, you will need to contact the hotels directly to see if the conference rates are still available and whether there is any availability.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Accommodation Rates</h4>
              <p className="mb-4">All rates are per room, per night and do not include breakfast, unless otherwise specified.</p>
              <p>Please note that the contracted accommodation rates reflect the best available at the time of agreement and may not always be the cheapest rates available.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Extended Bookings</h4>
              <p>Accommodation can be booked for the dates shown when booking. To extend accommodation bookings outside the available nights, please complete an accommodation booking and then email <a href="mailto:mail@conferencedesign.com.au" className="text-brand-orange hover:underline">mail@conferencedesign.com.au</a> requesting the additional nights. All additional nights are subject to availability and will be confirmed with the hotel.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Payment</h4>
              <p className="mb-4">When you book accommodation, you can select from the following payment options:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Have the accommodation cost included on your registration invoice to pay via EFT or with credit card.</li>
                <li>Pay later by credit card. If paying later by credit card, please refer to each hotel's payment policy for when your card will be charged by the hotel.</li>
              </ul>
              <p className="mb-4">All accommodation pre-payments made when registering will be forwarded to the selected hotel. Pre-payments must be received 45-days prior to the conference.</p>
              <p>All incidental expenses must be settled using a credit card upon check-out.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Third-Party Credit Cards</h4>
              <p>If you wish to pay using a third-party credit card, for example a work card you will not have with you on check-out, you will need complete a Credit Card Authorisation form before you arrive. Please contact Conference Design at <a href="mailto:mail@conferencedesign.com.au" className="text-brand-orange hover:underline">mail@conferencedesign.com.au</a> if you wish to complete a Credit Card Authorisation form. The completed form will then be forwarded to the hotel.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Credit Card Guarantees</h4>
              <p>Credit card details must be provided for all bookings and will be forwarded to the hotel to guarantee the booking.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Early Check-in Requests</h4>
              <p>Early check-in and late check-out requests are subject to availability on the day and cannot be confirmed by Conference Design. Requests for early check-in can be entered in the "Special Requests" field of your booking. The hotel will endeavour to accommodate requests on the day. Please enquire about the status of your request at the front desk upon check-in.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-200 my-8"></div>

      {/* Accommodation Options */}
      <section className="w-full py-12 px-6 max-w-[1200px] mx-auto mb-16">
        <h2 className="text-[24px] font-semibold text-gray-700 mb-12">Accommodation Options – Book When Registering</h2>

        {/* Pullman */}
        <div className="w-full bg-[#f8f9fa] py-12 px-8 mb-12 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="text-[14px] text-gray-600">
            <h3 className="text-[18px] font-semibold text-gray-800 mb-2">Pullman Melbourne on the Park</h3>
            <p className="italic text-gray-500 mb-1">192 Wellington Parade, Melbourne VIC 3002</p>
            <p className="italic text-gray-500 mb-6">5 minute walk to conference venue</p>

            <p className="mb-8 leading-relaxed">
              A perfect location for sporting, shopping and dining experiences. The hotel is poised at the edge of Melbourne's city centre, overlooking the iconic MCG and Rod Laver Arena. Offering 419 hotel rooms, a number of large suites and the William Clarke Sky Villa penthouse.
            </p>

            <h4 className="font-bold text-gray-800 mb-3">Room Rates</h4>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              <li><strong>Superior King/Twin</strong> – $339 per night</li>
            </ul>

            <h4 className="font-bold text-gray-800 mb-3">Cancellation Policy</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Between 29 – 0 days prior to arrival – 100% of total accommodation per room will be charged/non refundable.</li>
              <li>No Shows – 100% of total accommodation per room will be charged/non refundable.</li>
              <li>Credit cards must be provided at time of booking to secure all accommodation.</li>
            </ul>
          </div>
          <div className="w-full shadow-lg rounded-sm overflow-hidden border border-gray-100">
            <ImageCarousel images={pullmanImages} />
          </div>
          </div>
        </div>

        {/* Mantra */}
        <div className="w-full bg-[#f8f9fa] py-12 px-8 mb-12 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="text-[14px] text-gray-600">
            <h3 className="text-[18px] font-semibold text-gray-800 mb-2">Mantra on Jolimont</h3>
            <p className="italic text-gray-500 mb-1">133 Jolimont Road, East Melbourne VIC 3002</p>
            <p className="italic text-gray-500 mb-6">10 minute walk to conference venue</p>

            <p className="mb-8 leading-relaxed">
              Perfect for your upcoming conference at the MCG, Mantra on Jolimont offers comfortable Melbourne accommodation just a short stroll from the stadium and only 10 minutes from the CBD. Located in the heart of the city's sporting and entertainment precinct, it's the ideal base for business and events at this iconic venue.
            </p>

            <h4 className="font-bold text-gray-800 mb-3">Room Rates</h4>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              <li><strong>1 Bedroom</strong> – $309 per night</li>
              <li><strong>2 Bedroom Dual Key Quad</strong> – $629 per night</li>
              <li><strong>Studio King</strong> – $289 per night</li>
            </ul>

            <h4 className="font-bold text-gray-800 mb-3">Cancellation Policy</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Between 30 – 15 days prior to arrival – 1 nights accommodation will be charged/non refundable for bookings of 3 nights or less. For bookings of 4 nights or more, 2 nights cancellation fee will be charged.</li>
              <li>Between 14 – 0 days prior to arrival – 100% of total accommodation per room will be charged/non refundable.</li>
              <li>No Shows – 100% of total accommodation per room will be charged/non refundable.</li>
              <li>Credit cards must be provided at time of booking to secure all accommodation.</li>
            </ul>
          </div>
          <div className="w-full shadow-lg rounded-sm overflow-hidden border border-gray-100">
            <ImageCarousel images={mantraImages} />
          </div>
          </div>
        </div>
      </section>

      {/* Website Sponsor Section */}
      <section className="w-full py-12 flex flex-col items-center justify-center bg-white">
        <h3 className="text-[20px] font-bold text-gray-800 mb-8 tracking-wide">Website Sponsor</h3>
        <a href="https://www.unilab.com.au" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
          <img 
            src="https://conference.eresearch.edu.au/wp-content/uploads/2026/05/2026-eResearch-Website-Sponsor-Banner.png" 
            alt="Unilab Website Sponsor" 
            className="h-[120px] w-auto object-contain"
          />
        </a>
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
