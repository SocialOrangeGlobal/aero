"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp, Play, Volume2, Settings, Maximize, ExternalLink, Smartphone } from "lucide-react";

export default function LeadManagement() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800 font-sans">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[220px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[34px] font-bold tracking-wide">Sponsors & Exhibitors Lead Management</h1>
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

      {/* Main Content Area */}
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto flex-grow flex flex-col gap-10 text-[14px] leading-relaxed text-gray-600 font-light">
        
        {/* Intro */}
        <div>
          <h2 className="text-[32px] font-semibold text-gray-700 mb-6">Lead Management</h2>
          <p>
            Thank you for supporting the conference. Lead Management is a feature of the Conference App and designed to help you capture, qualify, and follow up with leads efficiently.
          </p>
        </div>

        {/* Guides */}
        <div>
          <h2 className="text-[26px] font-semibold text-gray-700 mb-6">Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Guide 1 */}
            <div className="bg-[#111111] text-white flex flex-col p-6 rounded-md min-h-[300px] sm:min-h-[350px] md:min-h-[500px]">
              <div className="flex flex-col items-center justify-center flex-grow mt-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                  {/* Purple Triangle Icon Mock */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 22H22L12 2Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 10L6 20H18L12 10Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Lead Management Set Up Guide</h3>
                <span className="text-[11px] bg-purple-900/40 text-purple-300 border border-purple-800/50 px-2 py-1 rounded flex items-center gap-1 mb-6">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 22H22L12 2Z"/></svg> Eventsair
                </span>
                <button className="bg-white text-black font-semibold py-2 px-5 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors">
                  <Play size={16} fill="black" /> Play Movie
                </button>
              </div>
              
              <div className="flex justify-between items-center text-gray-400 text-sm mt-8 border-t border-gray-800 pt-4">
                <div className="flex items-center gap-2">
                  <Play size={16} fill="currentColor" /> Step 0 of 7
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold border border-gray-600 rounded px-1">1x</span>
                  <Volume2 size={16} />
                  <Settings size={16} />
                  <Maximize size={16} />
                  <ExternalLink size={16} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="bg-[#111111] text-white flex flex-col p-6 rounded-md min-h-[300px] sm:min-h-[350px] md:min-h-[500px]">
              <div className="flex flex-col items-center justify-center flex-grow mt-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                  <Smartphone size={32} color="#4b5563" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center max-w-[80%] leading-tight">Conference App - Scanning Leads Guide</h3>
                <button className="bg-white text-black font-semibold py-2 px-5 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors">
                  <Play size={16} fill="black" /> Play Movie
                </button>
              </div>
              
              <div className="flex justify-between items-center text-gray-400 text-sm mt-8 border-t border-gray-800 pt-4">
                <div className="flex items-center gap-2">
                  <Play size={16} fill="currentColor" /> Step 0 of 4
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold border border-gray-600 rounded px-1">1x</span>
                  <Volume2 size={16} />
                  <Settings size={16} />
                  <Maximize size={16} />
                  <ExternalLink size={16} className="ml-2" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Set Up */}
        <div>
          <h2 className="text-[26px] font-semibold text-gray-700 mb-4">Set Up</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lead Management is set up in the <strong>Exhibitor Portal</strong> before the conference</li>
            <li>The booking contact has access to the Exhibitor Portal and can set-up lead questions, automated emails, and view and export scanned leads</li>
            <li>Refer to the set-up guide for instructions</li>
          </ul>
        </div>

        {/* Scanning Leads */}
        <div>
          <h2 className="text-[26px] font-semibold text-gray-700 mb-4">Scanning Leads at the Conference</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>Request Permission</strong><br/>
              Ask the attendee for permission to scan the QR code on their name badge or in their conference app
            </li>
            <li>
              <strong>Scan the Attendee</strong><br/>
              In the app, tap the <strong>Scan Leads</strong> icon, and scan the attendee's QR code
            </li>
            <li>
              <strong>Capture Lead Details</strong><br/>
              After scanning, complete any pre-set lead qualification questions
            </li>
            <li>
              <strong>Submit</strong><br/>
              When the submit button is tapped, the lead details are collected
            </li>
            <li>
              <strong>Lead Storage</strong><br/>
              All scanned lead details are stored in the <strong>Exhibitor Portal</strong>. This includes attendees contact details (including email address and contact number) and responses to custom lead questions
            </li>
            <li>
              <strong>Lead Visibility</strong>
              <ul className="list-[circle] pl-6 mt-2 space-y-2">
                <li>Each team member can view the attendees they have scanned and responses to custom lead questions in the app</li>
                <li>Full lead data is accessible only via the Exhibitor Portal</li>
              </ul>
            </li>
            <li>
              <strong>Automated Follow-Up (Optional)</strong><br/>
              If configured in advance, a thank-you email will automatically be sent to each scanned attendee
            </li>
            <li>
              <strong>Automated Lead Alert (Optional)</strong><br/>
              If configured in advance, a lead alert email will automatically be sent to your team with contact information and the answers to your custom questions
            </li>
          </ul>
        </div>

        {/* App Release */}
        <div>
          <h2 className="text-[26px] font-semibold text-gray-700 mb-4">App Release</h2>
          <p>
            The Conference App will be released before the event. The App is the primary source of information for the conference, with all attendees having access.
          </p>
        </div>

        {/* Accessing the App */}
        <div>
          <h2 className="text-[26px] font-semibold text-gray-700 mb-4">Accessing the App</h2>
          <p>
            Individual log-in details for the App will be emailed to each registered team member when the app is released. <strong>Attendees must be registered to access the App.</strong>
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-[26px] font-semibold text-gray-700 mb-4">Contact</h2>
          <p className="mb-6">
            If you have any questions about Lead Management, please contact us on the below or visit the registration desk at the conference.
          </p>
          <p>
            Conference Design<br/>
            <a href="mailto:mail@conferencedesign.com.au" className="text-[#1e8bc3] hover:underline">mail@conferencedesign.com.au</a><br/>
            +61 3 6231 2999
          </p>
        </div>

        {/* Unilab Website Sponsor Banner */}
        <div className="w-full mt-20 mb-10 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-8">Website Sponsor</h3>
          <img 
            src="https://conference.eresearch.edu.au/wp-content/uploads/2026/05/2026-eResearch-Website-Sponsor-Banner.png" 
            alt="Unilab Website Sponsor" 
            className="max-w-[700px] w-full h-auto object-contain"
          />
        </div>

      </section>

      {/* Floating Scroll to Top Button */}
      <button 
        className="fixed bottom-6 right-6 bg-gray-400 text-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>

      <Footer />
    </main>
  );
}
