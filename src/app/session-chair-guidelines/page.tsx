"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export default function SessionChairGuidelinesPage() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[200px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[32px] font-semibold tracking-wide">Session Chair Guidelines</h1>
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
      <section className="w-full py-16 px-6 max-w-[1000px] mx-auto flex-grow flex flex-col gap-10">
        
        <div className="flex flex-col gap-4">
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Thank you for agreeing to chair a session. This essential leadership role within the conference streamlines session continuity and improves the experience of delegates and presenters.
          </p>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Before the conference please familiarise yourself with the conference contributor policy and code of conduct.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">BoF Session Conveners</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            <Link href="#" className="hover:underline hover:text-blue-600">Click here</Link> for information to assist with the planning and delivery of your session.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">Your Session</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Check the online program to confirm your session date, time and room. The session is the full-time slot between one break and the next and includes consecutive presentations, for example from the end of morning tea until lunch.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">Presentations & Speakers</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            The presentation titles, speakers' names, and times allocated for each presentation are listed in the program. Review the abstracts and biographies and develop a 2-3 sentence introduction for each speaker with the presentation title, speaker's name, and affiliations. A printed copy of presenter names, affiliations and presentation titles will be provided in each room for the session chair.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">Online and App Program Updates</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            The program on the website and in the app is a live version and will include any late changes. Please check the program regularly, including before your session.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">On the Day</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Visit the registration desk on the morning of your session to collect any printed material, updates on any speaker cancellations, and housekeeping notes.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">Session Room</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Your session room will be listed in the program. Arrive <strong>15 minutes before</strong> the session starts to meet the speakers and check they are ready to present. Familiarise yourself with the layout and equipment.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">Cancellations and No Shows</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            If a presentation is withdrawn, a presenter does not arrive, or a presentation finishes early, please <span className="underline">do not bring any presentations forward</span>. Use the time for questions and discussions. Advise the audience you will commence the next presentation as per the program to avoid further disruptions. Delegates will be planning to come to presentations based on the published times.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">Presenters</h2>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>Presenters have been asked to upload their slides before the conference.</li>
            <li>The audio-visual technicians will load presentations onto the presentation computer before the session.</li>
            <li>If a presenter arrives with a USB to load slides, please direct them to the audio-visual technicians.</li>
            <li>Presenters have been asked to sit in the front of the room, so they can move to the lectern quickly.</li>
            <li>Advise the speakers you will signal the time remaining (5 minutes, 2 minutes, 1 minute) and ring the bell when they must stop.</li>
            <li>Advise the speakers you will end their presentation if they run over time.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">During the Session</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            There will be a space reserved for the chair at the front of the room with timecards and a bell. Use your phone to keep to time; your phone is more accurate than having individual clocks.
          </p>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>Start and end the session on time; don't wait for anyone.</li>
            <li>Introduce yourself, your role, your workplace, and any involvement with the conference.</li>
            <li>Ask delegates to download the app. Attendees can ask questions using the Q&A feature.</li>
            <li>Announce housekeeping and program updates if these have been provided.</li>
            <li>Ask for electronic devices to be turned to silent.</li>
            <li>Introduce the speakers from the lectern with their presentation title, name, and affiliations.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">Keeping Time</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Not keeping to the program timing is the biggest disruption to conferences and negatively impacts the experience of attendees and presenters.
          </p>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>Please ensure you keep all speakers on time.</li>
            <li>Use the timecards to show speakers how much time they have remaining.</li>
            <li>Use the counter bell to signal the end of a presentation.</li>
            <li>If a speaker uses all their allocated time, do not allow questions, and move to the next speaker.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">Question & Answer Time</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            For individual speakers, their question time is included in their presentation time.
          </p>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Question time is scheduled for lightning talks at the end of the last presentation.
          </p>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>Do not allow questions if a speaker used their allocated time. Move to the next speaker.</li>
            <li>Remind delegates questions can be asked using the Q&A feature of the app.</li>
            <li>If time allows, ask the audience for questions, and be prepared to ask a question if necessary.</li>
            <li>There will be a Q&A microphone in the room; ask a member of the audience to be a microphone 'runner', if required.</li>
            <li>Check the app feed for questions and use a microphone to read out questions.</li>
            <li>Ensure presenters use a microphone when responding to questions.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">Accessing Questions in the App</h2>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>The app will be available before the conference.</li>
            <li>Download and log into the conference app. You will be emailed a link.</li>
            <li>Open the app and select 'PROGRAM'.</li>
            <li>Select your session.</li>
            <li>Select 'Live Q&A'.</li>
            <li>Questions will appear in a list under the question box.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">Audio-visual Support</h2>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>An audiovisual technician will be roaming between the session rooms to troubleshoot any technical issues should they arise.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[18px] font-semibold text-gray-700">At the End of the Session</h2>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>Use any remaining time for questions and discussion.</li>
            <li>Make any closing comments and thank each speaker.</li>
          </ul>
        </div>

      </section>

      {/* Website Sponsor Section */}
      <section className="w-full py-12 flex flex-col items-center justify-center bg-white border-t border-gray-100 mt-8">
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
