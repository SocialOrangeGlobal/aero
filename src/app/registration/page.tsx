"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function RegistrationPage() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[200px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[32px] font-semibold tracking-wide">Registration</h1>
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

      {/* Main Two-Column Content */}
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-[28px] font-semibold text-gray-700 mb-6 tracking-tight">Registration</h2>
            
            <h3 className="text-[22px] font-semibold text-gray-600 mb-4">Register Now and Save</h3>
            <p className="text-[15px] leading-relaxed text-gray-600 mb-6">
              Registration and accommodation bookings are now open. Take advantage of our Early Bird rates and <strong className="font-bold text-gray-800">save up to $300</strong> by registering before the deadline.
            </p>
            <p className="text-[15px] leading-relaxed text-gray-600">
              Early Bird Registration closes on Friday, 4 September. Secure your place today and enjoy the best available rates.
            </p>
          </div>

          <div>
            <h3 className="text-[19px] font-semibold text-gray-600 mb-4">Payment Information</h3>
            <p className="text-[15px] leading-relaxed text-gray-600">
              Registration fees can be paid securely by credit card or via EFT (payment due within 7 days of registering). All prices are quoted in Australian Dollars (AUD) and include GST unless otherwise stated.
            </p>
          </div>

          <div>
            <h3 className="text-[19px] font-semibold text-gray-600 mb-4">Confirmation and Tax Invoice</h3>
            <p className="text-[15px] leading-relaxed text-gray-600">
              Once your registration is complete, you will receive a confirmation email along with a PDF Tax Invoice. If you do not receive your confirmation, please check that your email address was entered correctly and remember to check your junk or spam folder.
            </p>
          </div>

          <div>
            <h3 className="text-[19px] font-semibold text-gray-600 mb-4">Terms and Conditions</h3>
            <p className="text-[15px] leading-relaxed text-gray-600">
              All registrations are subject to the conference Terms and Conditions. Please review these before completing your registration.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10 mt-2">
          <div>
            <h2 className="text-[24px] font-semibold text-gray-600 mb-6 tracking-tight">Individual Registrations</h2>
            <Link 
              href="#" 
              className="inline-block bg-[#6C4C87] hover:bg-[#583d70] transition-colors text-white text-[15px] px-8 py-3 rounded-sm font-medium"
            >
              Click Here To Register As An INDIVIDUAL
            </Link>
          </div>

          <div>
            <h2 className="text-[24px] font-semibold text-gray-600 mb-6 tracking-tight">Group Registrations</h2>
            <p className="text-[15px] leading-relaxed text-gray-600 mb-6">
              A group booking allows you to register individuals closer to the conference and ensures you secure the reduced early registration fees. You can purchase multiple registrations across all categories on a single invoice. Group bookings close with early registration.
            </p>
            <Link 
              href="#" 
              className="inline-block bg-[#6C4C87] hover:bg-[#583d70] transition-colors text-white text-[15px] px-8 py-3 rounded-sm font-medium"
            >
              Click Here To Register A GROUP
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Tables Section */}
      <section className="w-full py-10 px-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Onsite Registration Table */}
        <div>
          <div className="bg-[#D1E4F2] p-4 flex justify-between items-center mb-1">
            <h3 className="text-[20px] font-semibold text-gray-700">Onsite Registration</h3>
            <span className="text-[20px] font-semibold text-gray-700">AUD$</span>
          </div>
          
          <div className="flex flex-col border-b border-gray-100">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="font-bold text-[15px] text-gray-800">Full Registration &ndash; Early</span>
              <span className="text-[15px] text-gray-700">$850</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="font-bold text-[15px] text-gray-800">Full Registration &ndash; Standard</span>
              <span className="text-[15px] text-gray-700">$1050</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="font-bold text-[15px] text-gray-800">Student Registration &ndash; Early*</span>
              <span className="text-[15px] text-gray-700">$550</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-bold text-[15px] text-gray-800">Student Registration &ndash; Standard*</span>
              <span className="text-[15px] text-gray-700">$750</span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-bold text-[15px] text-gray-800 mb-4">Includes</h4>
            <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-600 mb-8">
              <li>All conference sessions</li>
              <li>Morning tea where listed on the program</li>
              <li>Lunch where listed on the program</li>
              <li>Afternoon tea where listed on the program</li>
              <li>Welcome Reception</li>
            </ul>
            <p className="text-[14px] font-bold text-gray-800">
              * All student rates are available for full-time, undergraduate students.
            </p>
          </div>
        </div>

        {/* Day Registration Table */}
        <div>
          <div className="bg-[#EBD186] p-4 flex justify-between items-center mb-1">
            <h3 className="text-[20px] font-semibold text-gray-700">Day Registration &ndash; Standard</h3>
            <span className="text-[20px] font-semibold text-gray-700">AUD$</span>
          </div>
          
          <div className="flex flex-col border-b border-gray-100">
            <div className="flex justify-between items-center py-3">
              <span className="font-bold text-[15px] text-gray-800">Day &ndash; Standard</span>
              <span className="text-[15px] text-gray-700">$450</span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-bold text-[15px] text-gray-800 mb-4">Includes</h4>
            <p className="text-[14px] text-gray-600 mb-4">On the day of your registration(s):</p>
            <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-600 mb-8">
              <li>Conference sessions</li>
              <li>Morning tea where listed on the program</li>
              <li>Lunch where listed on the program</li>
              <li>Afternoon tea where listed on the program</li>
            </ul>
            <p className="text-[14px] text-gray-600">
              Social functions are not included in the day registration fee, but you are able to purchase tickets.
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Full Section */}
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto border-t border-gray-100 mt-8 mb-16">
        <h2 className="text-[26px] font-semibold text-gray-700 mb-6">Terms and Conditions</h2>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-12">
          These terms and conditions apply to all participants (<strong>you, your organisation, your group</strong>) of this event (<strong>the event</strong>) being organised by Conference Design Pty Ltd on behalf of the Host (<strong>us, our, we, Conference Design, the Host</strong>). By participating in the event, you are deemed to have agreed to these terms and conditions. If you submit a booking on behalf of another individual, it is your responsibility to ensure the participant is aware of these terms. An in-person event is held onsite at a venue, an online event is hosted online via the internet, and a hybrid event includes options for onsite and online participation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-8 text-[14px] text-gray-600 leading-relaxed">
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Payments</h4>
              <p>Full payment of any fees applicable is due within 7 days of submitting your booking. If you register within 90-days of the event, you need to pay at the time of registering using a credit card.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Conference Updates</h4>
              <p>All information for participants will be sent electronically to the email address that is provided at the time of registration.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">EFT Payments</h4>
              <p className="mb-4">Please include the reference shown on your Tax Invoice when submitting an EFT payment and email us the details including the date, amount and your bank's reference.</p>
              <div className="pl-6">
                <p>BSB: 017 010</p>
                <p>Account #: 1085 82575</p>
                <p>Account Name: Conference Design Pty Ltd</p>
                <p>Bank: ANZ Bank, 61 Liverpool Street, Hobart 7000</p>
                <p>Swift Code: ANZBAU3M</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Credit Card Payments</h4>
              <p>Credit card charges appear as <strong>Conference Design Pty Ltd</strong> on your card statement. Credit card transactions are processed directly by ANZ's secure and PCI compliant eGate platform and Conference Design does not store or transmit your credit card details.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Registration Inclusions</h4>
              <p>Each registration category specifies what is included for the category. All other costs associated with your participation shall be borne solely by you.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Sharing of Online Registrations is Not Permitted</h4>
              <p>When participating in the event online, you agree not to sell, trade, transfer, or share your access details, unless agreed to by us. If we determine you have violated this policy, we may cancel your access at any point and retain any payments made by you.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Insurance</h4>
              <p>The registration fees do not include personal insurance of any kind. You are advised to take out appropriate insurance for your participation. We are not liable for any expenses incurred due to, but not limited to, individual cancellations, variations in the event, postponement or cancellation of the event, or for theft of or damage to belongings.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Registration Cancellation</h4>
              <p>Registrations cancelled up to 90-days prior to the event will be eligible for a full refund where the payment was made online by credit card. In all other cases, a $150 administration fee will be charged. Cancellations notified within 90-days prior to the event will not be eligible for any refund, however, another person may participate in the event. All cancellations must be advised via email to Conference Design.</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8 text-[14px] text-gray-600 leading-relaxed">
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Moving to an Entirely Online Event</h4>
              <p>If we believe, at our sole discretion, a hybrid or in-person event needs to be held entirely online, all participants will be transferred to the equivalent online registration. Registration fees will be revised to reflect an online format and participants will be refunded any difference between the onsite and online fees. Full refunds for onsite registrations will not be issued due to an event moving online.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Cancellation or Postponement of an In-person Event</h4>
              <p>We do not accept any liability for losses incurred, such as but not limited to travel, hotels, or any other expenses, if the onsite event is cancelled or postponed due to an occurrence that renders performance of the event inadvisable, illegal, impracticable or impossible. Such an occurrence shall include but shall not be limited to: an Act of God; infectious disease outbreak, industrial disruptions, service provider failures, governmental restrictions and/or regulations; war or apparent act of war; terrorism or apparent act of terrorism; disaster; civil disorder, disturbance, and/or riots; curtailment, suspension, and/or restriction on transportation; or any other emergency.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Changing from Onsite to Online Participation and Vice-Versa</h4>
              <p className="mb-4">Where online participation is available, you can change from an onsite to online participation and vice-versa subject to the following:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Changes from onsite to online registration up to 30-days prior to the event will be eligible for a refund of the difference between the in person and online registration fees.</li>
                <li>Changes from onsite to online registration within 30-days of the event will not be eligible for any refund.</li>
                <li>Changes from online to onsite registration can be made up to 5 working days prior to the event, subject to venue confirmation and capacity. You will be required to pay any difference between the online and onsite registration fees using a credit card at the time of requesting the change.</li>
              </ul>
              <p>All requests must be advised via email to Conference Design.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Technical Disruptions to Presentations</h4>
              <p>We reserve the right to change presentation times, days and formats due to technical disruptions, such as audio-visual equipment failures, technician errors, software failures, internet outages, power outages, and the like. Where a technical disruption causes a temporary, partial, or complete failure to deliver and broadcast presentations, we will notify you as soon as possible and advise alternative arrangements for you to view the affected presentations. This may include changing the times, days and format, such as a pre-recorded versus a live presentation. If a technical disruption occurs, you will not be eligible for a refund if we change the times, days and format of any or all presentations.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8 text-[14px] text-gray-600 leading-relaxed">
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Changes</h4>
              <p>We reserve the right to change any and all aspects of the event, including but not limited to, the name, themes, content, program, speakers, format, performers, hosts, moderators, venues, and times.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Code of Conduct and Disruptive Behaviour</h4>
              <p>By participating in the event, you agree to abide by the Code of Conduct which is available on this website. We reserve the right to exclude any person or organisation from participating in the event. In addition, we may remove any person or organisation from the event, onsite and/or online, if we believe, in our sole discretion, that your participation negatively impacts the event or other participants.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Intellectual Property & Posting Content to Social Media</h4>
              <p className="mb-4">All materials, including but not limited to presentations, slides, posters, abstracts, papers, and any other written or visual content presented at the event, are the intellectual property of us or the respective authors and presenters. The authors or presenters retain the ownership rights to their materials.</p>
              <p className="mb-4">Participants may not reproduce the event content and materials distributed at or in connection with the event for any reason without the prior written permission from us.</p>
              <p>No part of the event may be recorded, reproduced or transmitted in any form or by any means, electronically or mechanically, including but not limited to video or audio recording, photographing, photocopying or any other information storage or retrieval system known now or in the future, without the explicit written permission from us.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Photography & Video</h4>
              <p>By registering for this event, you consent to having your photo and/or video taken and used for promotional purposes, which may include social media, websites, and email marketing. If you do not wish to have your photo taken, please advise the conference staff at the registration desk.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Visas</h4>
              <p>To avoid any inconvenience to you due to strict visa requirements, we will not confirm your participation or presentations until you have obtained a visa if you are coming from: Benin, Burkina Faso, Cape Verde, Côte d'Ivoire, Gambia, Ghana, Guinea, Guinea-Bissau, Liberia, Mali, Niger, Nigeria, Senegal, Sierra Leone, Togo, Cameroon, Kenya, Somalia, Iran, Pakistan, Algeria, Libya, Egypt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Scroll to Top Button (approximate from screenshot) */}
      <button 
        className="fixed bottom-6 right-6 bg-gray-400 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>

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

      <Footer />
    </main>
  );
}
