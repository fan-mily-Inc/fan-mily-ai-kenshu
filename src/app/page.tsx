import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechPartners from "@/components/TechPartners";
import WhyFanmily from "@/components/WhyFanmily";
import Instructor from "@/components/Instructor";
import Concept from "@/components/Concept";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Journey from "@/components/Journey";
import Modules from "@/components/Modules";
import AgentTeam from "@/components/AgentTeam";
import Curriculum from "@/components/Curriculum";
import Pricing from "@/components/Pricing";
import Subsidy from "@/components/Subsidy";
import Consulting from "@/components/Consulting";
import CostOffset from "@/components/CostOffset";
import Expansion from "@/components/Expansion";
import Flow from "@/components/Flow";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechPartners />
        <WhyFanmily />
        <Instructor />
        <Concept />
        <CaseStudies />
        <Testimonials />
        <Journey />
        <Modules />
        <AgentTeam />
        <Curriculum />
        <Pricing />
        <Subsidy />
        <Consulting />
        <CostOffset />
        <Expansion />
        <Flow />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
