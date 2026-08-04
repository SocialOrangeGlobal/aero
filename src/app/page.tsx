import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import ConferenceInfo from "@/components/ConferenceInfo";
import Sponsors from "@/components/Sponsors";
import WhoShouldAttend from "@/components/WhoShouldAttend";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <MainContent />
      <ConferenceInfo />
      <Sponsors />
      <WhoShouldAttend />
      <Footer />
    </main>
  );
}
