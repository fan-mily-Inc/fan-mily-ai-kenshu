import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Programs from "@/components/Programs";
import Curriculum from "@/components/Curriculum";
import Pricing from "@/components/Pricing";
import Subsidy from "@/components/Subsidy";
import Consulting from "@/components/Consulting";
import CostOffset from "@/components/CostOffset";
import Expansion from "@/components/Expansion";
import Flow from "@/components/Flow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Programs />
        <Curriculum />
        <Pricing />
        <Subsidy />
        <Consulting />
        <CostOffset />
        <Expansion />
        <Flow />
      </main>
      <Footer />
    </>
  );
}
