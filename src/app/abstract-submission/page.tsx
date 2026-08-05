"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";

export default function AbstractSubmissionPage() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[200px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[32px] font-semibold tracking-wide">Abstract Submission</h1>
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
      <section className="w-full py-16 px-6 max-w-[1200px] mx-auto flex-grow flex flex-col gap-12">
        
        {/* Status Message */}
        <div className="flex flex-col gap-4 text-[18px] text-gray-700 font-semibold border-b border-gray-200 pb-8">
          <p>Thank you to everyone who submitted abstracts for the 2026 eResearch Australasia Conference.</p>
          <p>The abstract submissions are now closed.</p>
        </div>

        {/* Top Section with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-16 border-b border-gray-200 pb-16">
          
          {/* Main Column */}
          <div className="lg:w-2/3 flex flex-col gap-6 text-[14px] text-gray-600 leading-relaxed">
            <h2 className="text-[24px] font-semibold text-gray-700 mb-2">Invitation to Submit</h2>
            <p>
              We invite you to submit an abstract for consideration for the 2026 eResearch Australasia Conference, to be held from 26-30 October 2026 at the Melbourne Cricket Ground (MCG), Victoria, Australia.
            </p>
            <p>
              The 2026 conference marks the 20th anniversary of eResearch Australasia. To acknowledge this milestone, the conference theme is <em>Celebrating our Past - Shaping our Future</em>. Submissions that reflect on the evolution of eResearch, highlight current practice, or explore future directions are encouraged.
            </p>
            <p>
              The eResearch Australasia Conference is the region's leading forum for academics, researchers, and research support professionals to share knowledge, insights, and innovations in eResearch and research infrastructure. It provides a platform for collaboration across disciplines and institutions, and for engagement with the Australasian and international research community.
            </p>
            <p>
              We welcome submissions presenting research, innovative programs, and significant findings to a professional audience. Contributions should be relevant to eResearch and may include original research, case studies, frameworks, or practical applications.
            </p>
            <p>
              A range of presentation formats is available, including oral presentations, lightning talks, posters, Birds of a Feather sessions (BoFs), and pre- and post-conference workshops.
            </p>
            <p>
              All submissions will be reviewed by the program committee and selected based on quality and relevance to the conference themes.
            </p>
            <p>
              To submit your abstract, please use the submission portal on this website and follow the instructions provided. For any queries, please contact the conference managers at <a href="mailto:mail@conferencedesign.com.au" className="text-blue-600 hover:underline">mail@conferencedesign.com.au</a>.
            </p>
            <p>
              We look forward to your contribution to the 2026 eResearch Australasia Conference.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-10">
            <div>
              <h3 className="text-[22px] font-semibold text-gray-700 mb-6">Submit an Abstract</h3>
              <div className="flex flex-col gap-4">
                <button className="w-full bg-[#7B5B9B] text-white py-3 px-4 rounded font-medium hover:bg-opacity-90 transition-colors text-[14px]">
                  Review & Selection Process
                </button>
                <button className="w-full bg-[#7B5B9B] text-white py-3 px-4 rounded font-medium hover:bg-opacity-90 transition-colors text-[14px]">
                  Responsible AI Statement
                </button>
                <button className="w-full bg-[#7B5B9B] text-white py-3 px-4 rounded font-medium hover:bg-opacity-90 transition-colors text-[14px]">
                  Other Information
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold text-gray-700 mb-6">Important Dates</h3>
              <ul className="flex flex-col gap-4 text-[14px] text-gray-600">
                <li className="flex flex-col gap-1">
                  <span className="font-bold text-gray-800">Call for Abstracts Open</span>
                  <span>May 2026</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="font-bold text-gray-800">Call for Abstracts Close</span>
                  <span>Extended to 24 June 2026</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="font-bold text-gray-800">Abstract Decision Notification</span>
                  <span>31 July 2026</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="font-bold text-gray-800">Presenter Registration Due</span>
                  <span>7 September 2026</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="font-bold text-gray-800">Conference Starts</span>
                  <span>26 October 2026</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2-Column Instructions Section */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column - Instructions */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-[22px] font-semibold text-gray-700">Abstract Submission Instructions</h2>
            <p className="text-[14px] text-gray-600">All abstracts are submitted online via the portal above.</p>

            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-semibold text-gray-700">1. Prepare your Abstract</h3>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-3">
                <li><strong>Title:</strong> Use a descriptive title of up to fifteen words that indicates the content of the abstract. Titles are printed in uppercase.</li>
                <li><strong>Authors:</strong> Include the given name and family name of every contributing author, separated by a comma.</li>
                <li><strong>Affiliations:</strong> Include each author's organisation, suburb, state, and email address (optional). The presenter will be indicated in the program, not the abstract.</li>
                <li>
                  <strong>Abstract:</strong> Prepare a 250-word abstract for all presentation types including:
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-500" style={{ listStyleType: "circle" }}>
                    <li>The purpose of the presentation</li>
                    <li>The nature and scope of the topic</li>
                    <li>The issue or problem under consideration</li>
                    <li>The outcome of the conclusion reached.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-semibold text-gray-700">2. Corresponding Author</h3>
              <p className="text-[14px] text-gray-600">Open the submission portal and enter the contact details of the corresponding author.</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-semibold text-gray-700">3. Abstract Submission Details</h3>
              <p className="text-[14px] text-gray-600 mb-2">You will need to enter the following details for each abstract you submit:</p>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                <li>Presentation title (15 words)</li>
                <li>Abstract (250 words)</li>
                <li>Preferred presentation format</li>
                <li>Preferred theme</li>
                <li>Names of authors</li>
                <li>Affiliations of authors</li>
                <li>Indicate the presenter.</li>
                <li>Short biography of the presenter (100 words)</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-[20px] font-semibold text-gray-700">Presenter Registration</h3>
              <p className="text-[14px] text-gray-600">
                All presenters must register for the conference and pay the appropriate registration fee. Presenters also need to meet their own travel and accommodation costs.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-[20px] font-semibold text-gray-700">Correspondence</h3>
              <p className="text-[14px] text-gray-600">
                The submitting author will be the only point of contact for all communication regarding the abstract, including acceptance notification.
              </p>
            </div>
          </div>

          {/* Right Column - Guidelines & Themes */}
          <div className="lg:w-1/2 flex flex-col gap-10">
            <div>
              <h2 className="text-[22px] font-semibold text-gray-700 mb-6">Abstract Guidelines</h2>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                <li>Abstracts must be original and unpublished.</li>
                <li>You must declare a potential conflict of interest.</li>
                <li>Ensure that your abstract is grammatically correct and free of other errors.</li>
                <li>Use single spacing for all text.</li>
                <li>Do not use abbreviations in the title of the abstract</li>
                <li>When using abbreviations in the abstract, spell them out in full at the first mention</li>
                <li>Capitalise the first letter in trade names.</li>
                <li>Abstracts should NOT contain references, tables, or figures.</li>
                <li>Accepted abstracts will appear exactly as submitted.</li>
                <li>Industry representatives are welcome to submit an abstract for consideration, however, submissions that are commercially or sales-focused will not be considered</li>
              </ul>
            </div>

            <div className="mt-4">
              <h2 className="text-[22px] font-semibold text-gray-700 mb-4">Presentation Themes</h2>
              <p className="text-[14px] text-gray-600 mb-8">
                During the submission process, you will be asked to select a theme that best suits your abstract. These themes will help the Program Committee to bring like-themed presentations together.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] text-gray-600">
                {/* Themes Column A */}
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Research Infrastructure and Identifiers</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>NCRIS, NRI and other national infrastructures</li>
                      <li>Persistent Identifiers in Research</li>
                      <li>Citations</li>
                      <li>Instruments and workflows</li>
                      <li>Cybersecurity & safety</li>
                      <li>Research storage services (Institutional, National, International)</li>
                      <li>Research computing services</li>
                      <li>Data Stewardship, Data Engineering</li>
                      <li>National/International examples and benchmarks</li>
                      <li>National/International partnerships</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Research Infrastructure People, Community and Workforce Development</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Women in HPC+, ResBaz, Open Science, Trainer and user communities</li>
                      <li>Research Software Engineering (RSE)</li>
                      <li>Data Product Managers</li>
                      <li>Science communication and champions</li>
                      <li>Citizen science projects</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Research Data</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Data Management and Governance</li>
                      <li>Data Storage and Growth</li>
                      <li>Data Movement</li>
                      <li>Sensitive, Secure, Ethics-Controlled and TREs</li>
                      <li>Indigenous/First Nations' Data, Sovereignty and Data Governance</li>
                      <li>Data repositories and sustainability</li>
                      <li>Data for Imaging</li>
                      <li>Data for AI</li>
                      <li>Sovereign Data</li>
                      <li>Data products</li>
                      <li>FAIR and CARE Data</li>
                      <li>National/International examples and benchmarks</li>
                      <li>National/International partnerships</li>
                    </ul>
                  </div>
                </div>

                {/* Themes Column B */}
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Research Compute</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>High Performance Computing (HPC)</li>
                      <li>Research Clouds</li>
                      <li>Research Compute for AI</li>
                      <li>Sovereign Compute and AI</li>
                      <li>Research Compute and Storage for Imaging</li>
                      <li>Quantum Computing</li>
                      <li>National/International examples and benchmarks</li>
                      <li>National/International partnerships</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Research Software, Platforms and Tools</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>AI Platforms, Models and Agentic workflows</li>
                      <li>Software Development</li>
                      <li>Machine Learning Technologies</li>
                      <li>FAIR and CARE for Research Software</li>
                      <li>Software for Research Communities and Disciplines</li>
                      <li>Software for Imaging</li>
                      <li>Data Visualisation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Research Communities, Domains and Disciplines</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Humanities and Social Sciences</li>
                      <li>Health and People</li>
                      <li>Space Agencies, Astronomy</li>
                      <li>Earth, Environmental</li>
                      <li>National/International examples and benchmarks</li>
                      <li>National/International partnerships</li>
                      <li>Other research areas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Presentation Formats Section */}
        <div className="mt-8 border-t border-gray-200 pt-16">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-6">Presentation Formats</h2>
          <p className="text-[14px] text-gray-600 mb-12 leading-relaxed">
            You are asked to note a preferred presentation format when submitting as there are limited places, particularly for oral presentations, the committee may request that you consider an alternative format. Authors will be advised and asked to confirm if they wish to present in the new format.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Oral Presentations</h3>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  Oral presentations are short conversation starters which provide enough information to encourage the audience to engage and seek further information.
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Oral presentations will be up to 15 minutes in duration, plus 5 minutes for questions and changeover.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Birds of a Feather (BoF) Sessions (60 minutes)</h3>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  A "Birds of a Feather" session is an opportunity to deeply engage with a community of practice and like-minded practitioners on a particular topic or theme. These sessions provide a platform for exchanging ideas, sharing experiences, and networking in a facilitated environment as contrasted to conference presentations.
                </p>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  When submitting a Birds of a Feather session, authors should include the following in their abstract:
                </p>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2 mb-4">
                  <li>The purpose, scope, and objectives of the BoF session</li>
                  <li>The intended audience for the BoF session</li>
                  <li>How the session will be structured and conducted, taking into consideration equity in terms of opportunity to contribute and representation across relevant stakeholders. For example, will it involve panel discussions, interactive activities, or open-floor discussions?</li>
                  <li>The key takeaways or outcomes that attendees can expect to derive from participating in the session</li>
                </ul>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  <strong>IMPORTANT:</strong> In addition to an abstract, <strong>authors must upload an agenda for their proposed BoF session</strong> using the template provided at the top of this page.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Pre and Post-Conference Workshops (Full Day/Half Day)</h3>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  Workshops provide an interactive and hands-on format for in-depth discussions, skill development, or collaborative activities. The workshop will allow participants to engage with facilitators and peers to explore topics or learn new techniques.
                </p>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  If you are submitting a workshop, please note the conference charges delegates a registration fee per workshop that is not included in the conference registration fee. This is necessary in order to cover catering, venue, and organisation costs for the workshops.
                </p>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2 mb-4">
                  <li>Full Day Workshop: $250 per person</li>
                  <li>Half Day Workshop: $200 per person</li>
                </ul>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  If you would prefer your attendees to pay a reduced cost to attend your workshop you are welcome to subsidise their attendance; this can be arranged with the conference managers.
                </p>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  The conference can offer one complimentary registration for presenters per workshop. Additional presenters must register for the workshop any pay the prevailing registration fee.
                </p>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  When submitting, Workshops authors will need to provide the following information:
                </p>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>Preferred duration (full day or half day)</li>
                  <li>Any constraints on the number of attendees for your workshop</li>
                  <li>Any particular skills or knowledge attendees should have for your workshop</li>
                  <li>Whether attendees need to install any special software to participate in your workshop</li>
                  <li>Whether attendees need to complete any preparation for your workshop</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Lightning Talks</h3>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  These are 5-minute presentations in which participants speak about their ideas, current activities, challenges and professional passions. The goal is to enlighten the audience on a subject, creating awareness, thought, and generating action on the subjects presented. The motto is "Enlighten us but make it quick!"
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  It is expected Lightning Talks will be delivered in a session with 4 – 5 other presentations, followed by open forum Q&A.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Display Posters</h3>
                <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                  Display posters allow for direct interactions with other attendees and facilitate detailed discussions. Posters can present research in progress, projects, initiatives, and case studies.
                </p>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2 mb-8">
                  <li>An A0-size portrait poster displayed for the duration of the conference</li>
                  <li>The abstract and a PDF of each poster will be included in the conference app for delegates to view on their smart devices</li>
                  <li>Presenters will also be asked to attend their poster during a poster reception to discuss the poster with other delegates</li>
                  <li>Presenters will also be invited to deliver a 2 minute pitch about their poster during the poster reception</li>
                </ul>

                <h4 className="font-bold text-gray-800 mb-4">Display Poster Dimensions</h4>
                <h4 className="font-bold text-gray-800 mb-3">A0 Poster Dimensions</h4>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
                  <li>A0 Portrait</li>
                  <li>841 mm wide x 1189 mm high</li>
                  <li>33.1 inches wide x 46.8 inches high</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Review & Selection Process Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Review & Selection Process</h2>
              
              <div>
                <h3 className="text-[18px] font-semibold text-gray-700 mb-3">Single-Blind Review</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Each abstract will be reviewed by two reviewers against a scoring rubric.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold text-gray-700 mb-3">Selection Process</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                  The Program Committee will allocate presentations to the program considering the score of the abstract, recommendations from reviewers, the author's preference for presentation format, and the balance of the program.
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Abstract authors will be notified of acceptance, rejection or change of format via email at the date specified above. Presenters are then required to confirm their acceptance and their participation in the conference. Unsuccessful abstracts submitted for oral presentation will be offered a poster presentation if the selection criteria are met. No correspondence will be entered into as to why individual abstracts did not receive an oral presentation.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-[26px] font-semibold text-gray-700 mb-2">Scoring</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                To ensure consistency and fairness in the review process, reviewers consider the following when scoring each submission:
              </p>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-3">
                <li>Relevance & interest to the eResearch community – clear alignment to conference and presentation themes.</li>
                <li>Practical contribution to knowledge – the submission presents proven/demonstrated outputs, rather than possibilities from a yet to be undertaken project, or a current project description without recommendations/way forward.</li>
                <li>Potential for engagement & conference impact – the submission is appropriate to the chosen format and will enhance discussions and conference experience.</li>
                <li>Diversity & inclusion contribution – the submission brings diverse perspectives to the conference.</li>
                <li>Exhibitor/sponsor submissions should address conference themes and foreground case studies in practice.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Submission & Presentation Information Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-10">Submission & Presentation Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Zenodo Abstract Publication</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                  Accepted Oral Presentation, Lightning Talk, BoF session, and Poster abstracts will be held indefinitely in a Zenodo store along with a DOI that Zenodo will generate (https://zenodo.org/).
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Listings will include abstracts, titles, author names, and affiliations. If you do not wish your abstract to be stored on Zenodo, please email mail@conferencedesign.com.au prior to Friday 7 November.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Authors' Permission</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  By submitting an abstract all authors are deemed to have agreed to release the content to the conference organisers and give permission to publish the abstract and presentation in all conference publications including on the website, in the app and printed material.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Presenter Guidelines</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  A set of guidelines to assist presenters will be made available before the conference.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Cancellations or Change of Presenter</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Please avoid late cancellations or changing the presenter as material will be pre-printed with the speaker's name and organisation and cannot be changed at a later date. If you need to cancel or change the presenter, please advise Conference Design at mail@conferencedesign.com.au as early as possible.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Prizes and Awards</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  See the Awards page for the presentation awards offered.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Disclosure Of Interest Statement</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                  We recognise the considerable contribution that industry partners make to professional and research activities. We also recognise the need for transparency and the disclosure of potential conflicts of interest by acknowledging these relationships in publications and presentations. Where relevant, all authors must include a disclosure of interest statement in their abstract and if accepted in their presentation. For example, <em>The Melon Institute and Metabolism Corp are funded by the University of Oxbridge, UK. No pharmaceutical grants were received in the development of this study.</em>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Medical Technology Association of Australia Code of Practice</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  If your presentation refers to medical devices, your abstract and presentation must comply with the <em>Medical Technology Association of Australia Code of Practice.</em>
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Speaker Biography</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  A brief biography of the presenter is to be provided when you submit your abstract. Biographies may include the presenter's position, career details and major work achievements. Biographies should be written in the third person. If your abstract is accepted, your biography will be used when introducing you as a speaker at the conference.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Uploading Your Presentations and Posters</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  You will be sent links to upload your PowerPoint slides and posters via Drobox.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Publishing your Presentation in the Online Portal</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Presentations will be made available to registered delegates for viewing in the online portal for three months unless you advise otherwise. Any additional files authors choose to share via the online portal, as well as live Q & A/panel discussions, will also be available to view during and after the presentation. Access to the portal will be password protected and limited to conference registrants. If presentations are to be used or published in any other format or forum, your specific consent will be requested.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Permission for Material Presented</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Please ensure you have documented permission to use any images, music or other content in your abstract and presentation. Do not include any images copied from the internet. Getty Images and other image agencies crawl the internet looking for images that have been copied without the appropriate licenses. You are liable for all copyright infringements that arise from your presentation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Copyright and Ownership of Material</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  All materials, including but not limited to presentations, slides, posters, abstracts, papers, and any other written or visual content presented at the event, are the intellectual property of us or the respective authors and presenters. The authors or presenters retain ownership rights to their materials.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Will People be Able to Record or Download My Presentation?</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  During the registration process, attendees agree to the conference Terms & Conditions, which include rules on unauthorised photography and recording of conference material. We cannot enforce this rule completely, so presenters should assume a participant may take unauthorised photographs, screenshots, audio, or video recordings. You may wish to adjust the content of your presentation accordingly. Presentations in the online portal and conference app are available only to view and cannot be downloaded.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Audio Visual Equipment Available</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                  Each session room will be equipped with the following equipment:
                </p>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2 mb-6">
                  <li>A presentation laptop running Windows 10 or 11</li>
                  <li>Data projector</li>
                  <li>Screen</li>
                  <li>Lectern</li>
                  <li>Microphone, including sound for your presentation</li>
                  <li>A clicker to progress your slides</li>
                  <li>A laser pointer or mouse for pointing</li>
                </ul>
                <p className="text-[14px] text-gray-800 font-bold leading-relaxed mb-6">
                  All slides will be run from the presentation computer.
                </p>
                <p className="text-[14px] text-gray-800 font-bold leading-relaxed mb-6">
                  If you have a complex presentation, which includes multiple media files, we suggest you bring your laptop as a backup in case of difficulties loading your presentation.
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                  If you use a Mac, have a complex presentation or require a specific or uncommon program, we suggest you bring your laptop as a backup in case of difficulties loading your presentation. You will need to arrange this in advance with the AV technicians.
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                  Please provide any specific audio-visual requirements to the Conference Secretariat at mail@conferencedesign.com.au.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">PowerPoint Presentation Tips</h3>
                <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2 mb-6">
                  <li>All presentations should be in PowerPoint.</li>
                  <li>PowerPoint should be in a 16:9 aspect ratio.</li>
                  <li>Video and audio clips should be embedded in your slides rather than linked to external files.</li>
                  <li>There should be no more than 5 x 1-line bullet points per slide.</li>
                  <li>The optimum title text is 45 – 55 points and no smaller than 36 points.</li>
                  <li>Body text should be at least 26 points.</li>
                  <li>Avoid UPPERCASE letters as they are hard to read.</li>
                  <li>Please keep to the time limit of your presentation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Speaker Preparation Room</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                  Please bring your presentation to the conference on a USB stick as a backup. Go to Speaker's Preparation room at least 4 hours before or the day before your presentation. A technician will be available to load and check your presentation and to discuss any audio-visual queries you may have. If you are not providing slides for your presentation, please advise the AV technician in the Speaker's Preparation room 4 hours before your session.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-4 text-[18px]">Online Oral Presentations</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                  For online presenters, it is anticipated your presentation will be streamed live to delegates via Zoom meetings. Presenters can share their screens and present slides using the standard Zoom meetings functionality. Presenters will need to supply a copy of their slides before the conference as a backup in case of technical difficulty.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Writing an Abstract Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-[26px] font-semibold text-gray-700 mb-6">Writing an Abstract</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-8">
            An abstract is a short document that captures the interest of potential attendees of your session. Your abstract should engage the reader by telling them what your presentation is about. The title of the proposed presentation is also important; short attention-catching titles are the most effective, however, it is also important to ensure that the title describes the subject.
          </p>

          <h3 className="text-[16px] font-bold text-gray-800 mb-6">These are questions to consider when writing your abstract.</h3>
          
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2 mb-8">
            <li>Does the title succinctly describe the topic?</li>
            <li>Does the abstract clearly state the topic of the presentation?</li>
            <li>Does the abstract say how the research or project was or is being undertaken?</li>
            <li>Does the abstract give a concise summary of the findings?</li>
            <li>Does the abstract indicate the value of the findings and whom the findings will benefit?</li>
            <li>Does the abstract engage the reader by telling them why they should attend the presentation?</li>
            <li>Is the abstract well written in terms of conciseness, language, and grammar?</li>
            <li>Does the abstract conform to the structure outlined and the word limit?</li>
          </ul>

          <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
            While the format of your abstract will vary with the topic and type of information you are presenting, most abstracts will include the following:
          </p>

          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2 mb-8">
            <li><strong>Background of the project</strong> or initiative.</li>
            <li><strong>Method</strong> of research or project implementation.</li>
            <li><strong>Results</strong> of the project or research</li>
            <li><strong>Discussion</strong> of the outcomes and implications.</li>
          </ul>

          <p className="text-[14px] text-gray-600 leading-relaxed">
            Finally, your abstract should not include diagrams or images; references are not required in the abstract.
          </p>
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
