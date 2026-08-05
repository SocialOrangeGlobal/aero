"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export default function ReviewerGuidelinesPage() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white text-gray-800">
      <Navbar variant="light" />

      {/* Hero Banner */}
      <section className="w-full bg-[#0b2745] text-white relative overflow-hidden h-[160px] md:h-[200px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-[32px] font-semibold tracking-wide">Reviewer Guidelines</h1>
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
            Thank you for being a member of the eResearch Australasia Conference Review Panel. Below are some tips to assist you.
          </p>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Please complete all reviews by <strong>24 July 2026</strong>. If you cannot make this deadline please contact <a href="mailto:mail@conferencedesign.com.au" className="text-blue-600 hover:underline">mail@conferencedesign.com.au</a> ASAP so we can find alternative reviewers.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-semibold text-gray-700">About the Conference</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            The eResearch Australasia Conference provides opportunities for delegates to engage, connect, and share their ideas and exemplars concerning new information-centric research capabilities, and how information and communication technologies help researchers to collaborate, collect, manage, share, process, analyse, store, find, understand and reuse information.
          </p>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            The conference will be held at the Melbourne Cricket Ground (MCG) from 26 – 30 October.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-semibold text-gray-700">Presentation Formats</h2>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>Oral Presentations: 15 minutes plus 5 minutes for questions and changeover</li>
            <li>Birds of a Feather (BoF) sessions: 60 minutes</li>
            <li>Lightning Talks: 5 minutes</li>
            <li>Display Posters</li>
            <li>Pre and Post Conference workshops: Full Day or Half Day</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-semibold text-gray-700">Reviewer Notes</h2>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>The review process for the conference is single-blind peer review (reviewers know the identity of the author, but authors do not know the identity of reviewers).</li>
            <li>We anticipate that reviewers will be allocated approximately 10 abstracts. Abstracts will not be more than 250 words and will be in a structured format.</li>
            <li>
              More information regarding the abstract submission process and presentation formats can be found on the conference website – 
              <br />
              <Link href="https://conference.eresearch.edu.au/abstracts/" className="text-blue-600 hover:underline break-all">https://conference.eresearch.edu.au/abstracts/</Link>
            </li>
            <li><strong>We ask that all reviews are completed by 24 July 2026.</strong></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-semibold text-gray-700">Overview of the Abstract Reviewing Process</h2>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>The abstract reviewing process is overseen by the eResearch Australasia Conference Program Committee. All abstracts will be reviewed by at least two reviewers.</li>
            <li>Reviewers will be required to give each submission an overall rating on a scale of 1 – 9</li>
            <li>Please do not give a score of 7 to nearly all of your reviews, try and have a normal distribution of scores across them.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-semibold text-gray-700">General scoring guidance</h2>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>1-2 — Serious issues and I will argue to reject this proposal.</li>
            <li>3-4 — Weak proposal, but I will not argue strongly against acceptance.</li>
            <li>5-6 — OK proposal, but I will not argue for it to be accepted.</li>
            <li>7-8 — Good proposal, and I will argue for it to be accepted.</li>
            <li>9 — Outstanding proposal and I will argue for it to be accepted.</li>
            <li>Conflict of Interest – I have a conflict of interest and decline to review the submission.</li>
          </ul>
          <p className="text-[14px] text-gray-600 leading-relaxed mt-4">
            We ask for comments for the Committee and for the Author. Please at a minimum give a short sentence to the Committee on why you have scored this paper as you have. If you would like additional guidance, you can use the rubric table below.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <h2 className="text-[20px] font-semibold text-gray-700">Reviewers should consider the following when rating each submission:</h2>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-3">
            <li>Relevance & interest to eResearch community – the submission demonstrates "deep eResearch" in alignment with conference themes.</li>
            <li>Practical contribution to knowledge – the submission presents proven/demonstrated outputs, rather than possibilities from a yet to be undertaken project, or a current project description without recommendations/way forward.</li>
            <li>Potential for engagement & conference impact – the submission is appropriate to the chosen format and will enhance discussions and conference experience</li>
            <li>Diversity & inclusion contribution – the submission brings diverse perspectives to the conference.</li>
            <li>Exhibitor/sponsor submissions should address conference themes and foreground case studies in practice.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Reviewers will also need to consider and advise on the following:
          </p>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-3">
            <li><strong>Their own level of expertise</strong> on the subject and confidence in their assessment on a scale of 1 – 5 (1 = very low, 5 = very high).</li>
            <li><strong>Their recommendation for the abstract</strong>. Note, reviewers may recommend a submission be accepted in an alternative format to that requested. For example, a marginal Oral Presentation submission can be recommended to be accepted as a Lightning Talk or Poster.</li>
            <li><strong>Whether they have a Conflict of Interest</strong> in reviewing the submission.</li>
            <li><strong>Comments for the program committee</strong> to assist with the committee making decisions on final acceptance. Any comments to the committee will not be made available to the author.</li>
            <li><strong>The need to provide comments for the author</strong>. These comments will be reviewed by the Program Committee and sent to the author upon delivery of their acceptance/rejection notification. If you have no comments this field can be left blank; however, we encourage constructive comments that provide helpful feedback to authors, e.g. to make corrections or for future submissions.</li>
          </ul>
          <p className="text-[14px] text-gray-600 leading-relaxed mt-4">
            Once reviews have been completed, the Program Committee will review the scores, recommendations of the reviewers, and any comments to determine which submissions will be accepted.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <h2 className="text-[20px] font-semibold text-gray-700 italic text-gray-800 font-medium">Conflicts of Interest</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            To ensure the fair and equal review of submissions we ask all reviewers to advise if you have a conflict of interest in reviewing a submission.
          </p>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            A conflict of interest is a situation in which someone in a position of trust has competing professional or private interests. Such competing interests could make it difficult for an individual to fulfill his/her duties impartially and could improperly influence the performance of their official duties and responsibilities.
          </p>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Conflicts of interest include:
          </p>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>Being an author on the submission you are reviewing.</li>
            <li>An ongoing working or personal relationship with any authors associated with the submission you are reviewing.</li>
            <li>Currently working or have worked in the last two years at the same institution as any of the submitting authors.</li>
          </ul>
          <p className="text-[14px] text-gray-800 font-bold leading-relaxed mt-4">
            If you have a conflict of interest please advise this in the online review portal and email the conference secretariat immediately <a href="mailto:mail@conferencedesign.com.au" className="text-gray-800 hover:underline font-normal">(mail@conferencedesign.com.au)</a> so the submission/s can be reassigned to another reviewer.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <h2 className="text-[20px] font-semibold text-gray-700">Online Review Portal</h2>
          <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-2">
            <li>Reviewers can log into the reviewer portal using the link sent to them via email.</li>
            <li>When reviewing abstracts, reviewers must click "Update" to save scores and comments. Reviewers will be able to come back to the record later and make changes if required.</li>
            <li>Once the review of an abstract is finalised select the "Completed" check box and click "Submit Completed Review".</li>
            <li>Once the review has been completed, reviewers cannot make changes.</li>
            <li>Please contact the Conference Secretariat with any questions or issues regarding the portal: <a href="mailto:mail@conferencedesign.com.au" className="hover:underline">mail@conferencedesign.com.au</a>.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 mt-8 overflow-x-auto">
          <h2 className="text-[20px] font-semibold text-gray-700">Abstract Review Rubric – eResearch Australasia 2026 Conference</h2>
          <p className="text-[14px] text-gray-600 leading-relaxed -mt-2">
            This rubric for reviewers is provided should you require additional guidance. Please note usage is optional.
          </p>
          
          <div className="min-w-[800px] border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-6 border-b border-gray-200 bg-gray-50 text-[14px] font-bold text-gray-800 p-4 gap-4">
              <div>Criteria</div>
              <div>9 (Outstanding)</div>
              <div>7-8 (Good)</div>
              <div>5-6 (OK)</div>
              <div>3-4 (Weak)</div>
              <div>1-2 (Serious Issues)</div>
            </div>
            
            {/* Table Row 1 */}
            <div className="grid grid-cols-6 border-b border-gray-200 text-[13px] text-gray-600 p-4 gap-4">
              <div className="font-bold text-gray-800">Relevance & Interest to eResearch Community</div>
              <div>Highly relevant and essential to eResearch discussions. Clear alignment to conference themes.</div>
              <div>Clearly relevant and valuable for the eResearch audience.</div>
              <div>Somewhat relevant but lacks strong connection to eResearch themes.</div>
              <div>Weakly relevant with minimal connection to eResearch.</div>
              <div>Not relevant to the eResearch community.</div>
            </div>

            {/* Table Row 2 */}
            <div className="grid grid-cols-6 border-b border-gray-200 text-[13px] text-gray-600 p-4 gap-4">
              <div className="font-bold text-gray-800">Practical Contribution to Knowledge</div>
              <div>Highly innovative, advancing knowledge with demonstrated findings or concrete outputs.</div>
              <div>Offers new insights or emerging trends with clear implications.</div>
              <div>Contributes to existing discussions but lacks originality.</div>
              <div>Topic is somewhat outdated or presents minimal new insights.</div>
              <div>Topic is not new, widely covered, or speculative without evidence.</div>
            </div>

            {/* Table Row 3 */}
            <div className="grid grid-cols-6 text-[13px] text-gray-600 p-4 gap-4">
              <div className="font-bold text-gray-800">Potential for Engagement & Conference Impact</div>
              <div>Will be highly engaging and enhance discussions at the conference.</div>
              <div>Will contribute positively and engage attendees.</div>
              <div>Moderately engaging but may not stand out.</div>
              <div>Unlikely to generate interest or meaningful discussion.</div>
              <div>Lacks engagement and will not add value to the conference.</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-8 items-center w-full">
          <h2 className="text-[20px] font-semibold text-gray-700 w-full text-left">Step-by-Step Guide to Using the Review Portal</h2>
          
          {/* Video Mockup Container */}
          <div className="w-full max-w-[600px] aspect-[4/5] bg-[#1a1a1a] rounded text-white flex flex-col relative overflow-hidden">
            <div className="flex-grow flex flex-col items-center justify-center p-8 text-center gap-6">
              {/* Logo icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-purple-600">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h3 className="text-2xl font-bold px-4 leading-tight">
                2026 eResearch - How To Review an Abstract Submission Online
              </h3>

              <div className="flex gap-4 text-sm text-gray-300 font-medium">
                <span>8 Steps</span>
                <span>3 minutes</span>
              </div>

              <div className="bg-[#2a2a2a] px-3 py-1 rounded text-xs flex items-center gap-2 border border-gray-700">
                <span className="text-purple-400">❖</span> Eventsair
              </div>

              <button className="mt-4 bg-white text-black font-semibold py-3 px-6 rounded flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Movie
              </button>
            </div>

            {/* Bottom Controls Bar */}
            <div className="h-16 bg-[#111] w-full flex items-center justify-between px-4 text-sm text-gray-400 border-t border-gray-800">
              <div className="flex items-center gap-3">
                <button className="text-white hover:text-gray-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="font-medium">Step 0 of 8</span>
              </div>

              <div className="flex items-center gap-4">
                <button className="hover:text-white font-medium">1x</button>
                <button className="hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                  </svg>
                </button>
                <button className="hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
                  </svg>
                </button>
                <button className="hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                  </svg>
                </button>
              </div>

              {/* Pop-out icon */}
              <button className="absolute right-4 top-[calc(100%-1rem)] -translate-y-full hover:text-white">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </button>

              {/* Progress bar line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-800">
                <div className="h-full bg-gray-500 w-[10%] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
              </div>
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
