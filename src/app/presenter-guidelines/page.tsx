"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";

export default function PresenterGuidelinesPage() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[200px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[32px] font-semibold tracking-wide">Presenter Guidelines</h1>
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
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto flex-grow flex flex-col gap-16">
        
        {/* Section 1: General Information for All Presenters */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-[22px] font-semibold text-gray-700 mb-4">General Information for All Presenters</h2>
                <p className="text-[14px] text-gray-600 mb-8 leading-relaxed">
                  Thank you for presenting at the conference. These guidelines will assist with your preparation and participation in the conference.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Presentation & Session Times</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>Check the online program to confirm your presentation's session, date and time</li>
                  <li>The program on the website and in the conference app is live and will include any changes</li>
                  <li>Please re-confirm your session date, time and room prior to your presentation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Keeping Time</h3>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  Not keeping to time is the biggest disruption to conferences and negatively impacts the experience of attendees and presenters.
                </p>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>Please ensure you keep to your allotted time</li>
                  <li>The session chair will use timecards to show you how much time is remaining</li>
                  <li>The session chair will use a bell to signal the end of your presentation</li>
                  <li>If you use all the allocated time, the chair will not allow questions and will move to the next speaker</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Handouts</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>If you wish to provide handouts to attendees, send a PDF version to mail@conferencedesign.com.au</li>
                  <li>Handouts will be added to your presentation/poster in the conference app</li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8 md:mt-[100px]">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Publication of Slides</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>Slides will be converted to PDF and made available on the conference website</li>
                  <li>If you do not wish your slides to be published, please email mail@conferencedesign.com.au</li>
                  <li>If you wish to provide edited slides for publication, please advise us following your session and send a PDF version to mail@conferencedesign.com.au</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Copyright & Ownership</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>Authors retain ownership and copyright of their presentation and material</li>
                  <li>Ensure you have documented permission to use any images, music or other content in your abstract and presentation. Do not include any images copied from the internet. Getty Images and other agencies crawl the internet looking for images that have been copied without the appropriate licenses. You are liable for all copyright infringements that arise from your presentation.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Recording, Photography & Screen Shots of Presentations</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Attendees agree to registration Terms & Conditions, which prohibit unauthorized photography, screenshots, audio, or video recording of conference material. We cannot enforce this rule completely, so you should assume a participant may take unauthorized recordings. You may wish to adjust the content of your presentation accordingly.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Zenodo Abstract Publication</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                  Accepted Oral Presentation, Lightning Talk, BoF session, and Poster abstracts will be held indefinitely in a Zenodo store along with a DOI that Zenodo will generate (https://zenodo.org/).
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Listings will include abstracts, titles, author names, and affiliations. If you do not wish your abstract to be stored on Zenodo, please email mail@conferencedesign.com.au prior to Friday 23 October.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8 md:mt-[100px]">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[22px]">Presentation Upload</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2 mb-6">
                  <li>Presentation slides and poster PDFs due – Wednesday 14 October</li>
                </ul>
                <button className="w-full bg-[#1e88e5] text-white py-3 rounded-sm font-semibold hover:bg-blue-600 transition-colors mb-6 text-[14px]">
                  Presentation Upload
                </button>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Check your presentation with the AV technician at least two hours before your session. If you upload a revised set of slides, confirm the version being used with the AV technician.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Audio-Visual (AV) Equipment</h3>
                <p className="text-[14px] text-gray-600 mb-4">Each session room will be equipped with:</p>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2 mb-4">
                  <li>Presentation laptop running Windows 10 or 11</li>
                  <li>Data projector</li>
                  <li>Screen or large monitor</li>
                  <li>Lectern</li>
                  <li>Microphone, including sound for your presentation</li>
                  <li>A clicker to progress your slides</li>
                  <li>A laser pointer or mouse for pointing</li>
                </ul>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  All presentations will be run from the presentation computer.
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  If you use a Mac, have a complex presentation, or require an uncommon program, we suggest you bring your laptop as a backup in case of difficulties loading your presentation. You will need to arrange this in advance of the conference with the AV technicians.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">PowerPoint Presentation Tips</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>Slides should be in a 16:9 aspect ratio</li>
                  <li>Video and audio clips should be embedded in your slides rather than linked to external files</li>
                  <li>There should be no more than 5 x 1-line bullet points per slide</li>
                  <li>The optimum title text is 45 – 55 points and no smaller than 36 points</li>
                  <li>Body text should be at least 26 points</li>
                  <li>Avoid UPPERCASE letters as they are hard to read</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Oral Presentations */}
        <div>
          <h2 className="text-[26px] font-semibold text-gray-700 mb-8 mt-8">Oral Presentations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Preparing and Uploading Presentations</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>Prepare your PowerPoint slides in 16:9 aspect ratio</li>
                  <li>Embed any content such as audio or video; don't link to external files</li>
                  <li>Presentation files should be named using your family name, the day and the time of your presentation (e.g. Brown-Saturday-1400.ppt)</li>
                  <li>You can upload your presentation before the conference using the link provided <strong>or</strong> take your presentation to the Speakers Preparation Room onsite</li>
                  <li>If you upload your presentation before the conference, you can take an updated version to the conference</li>
                  <li>If you upload your presentation before the conference, bring your presentation on a USB as a backup</li>
                  <li><strong>Check your presentation with the AV technician in the Speakers Preparation Room at least two hours before your session</strong></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Before the Session</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>Re-confirm your presentation's session, date, time, and room in the conference app prior to your session</li>
                  <li>Arrive 15 minutes before the session starts to meet the session chair and AV technician</li>
                  <li>An AV technician will assist during sessions</li>
                  <li>Familiarise yourself with the room layout and AV equipment</li>
                  <li>Sit in the front row to move quickly to the lectern once the chair introduces you</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">During your Presentation</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li><strong>Please ensure you keep to the allotted time</strong></li>
                  <li>The chair will signal the time remaining in your presentation (5 minutes, 2 minutes, 1 minute)</li>
                  <li>The chair will ring the bell when you must stop</li>
                  <li>If you use all your time, the session chair will not allow questions and will move to the next speaker</li>
                  <li>Please remain in the room following your presentation as the chair will use any remaining time for questions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Question Time</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>For individual speakers, question time is included in your presentation time</li>
                  <li>For lightning talks, question time is scheduled at the end of the last presentation</li>
                  <li>The chair will direct questions from the audience and from the app</li>
                  <li>Use a microphone (if available) when responding to questions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Poster Presentations */}
        <div>
          <h2 className="text-[26px] font-semibold text-gray-700 mb-8 mt-8">Poster Presentations</h2>
          
          <div>
            <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Display Posters</h3>
            <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
              <li>Posters will be displayed onsite in A0 portrait size</li>
              <li>Your poster should be prepared in A0 size in portrait orientation, which is <strong>84.1 cm wide x 118.9 cm high</strong></li>
              <li>You do not need to use a conference template to prepare your poster</li>
              <li>You need to print your poster and bring it with you to the conference</li>
              <li>Poster boards and adhesive will be provided</li>
              <li>Poster boards will be numbered; check the website for your poster number</li>
              <li>You need to collect your poster at the end of the conference; posters will not be kept by staff</li>
              <li>All posters will be displayed in the attendee app as a PDF</li>
              <li>Upload a single PDF file of your poster using the link provided no later than 14 October</li>
              <li>PDFs should be named using the poster numbers from the website, your family name, and the initial five words of the title (e.g. 123-Brown-A study from Australian eResearchers.pdf)</li>
            </ul>
          </div>
        </div>
        {/* Section 4: BoF Sessions */}
        <div>
          <h2 className="text-[26px] font-semibold text-gray-700 mb-8 mt-8">BoF Sessions</h2>
          <p className="text-[14px] text-gray-600 mb-8">
            All BoF sessions are 60 minutes in duration.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Planning</h3>
              <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                BoF conveners should plan and prepare for all aspects of their BoF. Consideration should be given to:
              </p>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                <li>The order of presentations, and who will be facilitating the session</li>
                <li>Timekeeping</li>
                <li>Who will monitor the App Q&A during the session</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Handouts</h3>
              <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                Please email any handouts to mail@conferencedesign.com.au before the conference. Handouts will be uploaded to the attendee app. Handouts may include:
              </p>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                <li>Session agendas</li>
                <li>PDFs</li>
                <li>Videos</li>
                <li>Web links</li>
                <li>Google docs</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-700 mb-3 text-[18px]">Equipment</h3>
              <p className="text-[14px] text-gray-600 mb-4">Each BoF Session room will include the following:</p>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                <li>Presentation laptop running Windows 10 or 11</li>
                <li>Data projector</li>
                <li>Screen or large monitor</li>
                <li>Lectern</li>
                <li>Microphone, including sound for your presentation</li>
                <li>A clicker to progress your slides</li>
                <li>A laser pointer or mouse for pointing</li>
                <li>Panel table set for 4 people with microphones</li>
              </ul>
            </div>
          </div>
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
