import Header from "./components/Header";
import Keunggulan from "./components/Keunggulan";
import Layanan from "./components/Layanan";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import TesQA from "./components/TesQA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Keunggulan />
        <Layanan />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
