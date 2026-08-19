import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import HeroVisual from "@/components/HeroVisual";
import TrustBar from "@/components/TrustBar";
import FeatureRows from "@/components/FeatureRows";
import FeatureGrid from "@/components/FeatureGrid";
import Comparison from "@/components/Comparison";
import ClosingCta from "@/components/ClosingCta";
import SiteFooter from "@/components/SiteFooter";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <HeroVisual />
        <TrustBar />
        <FeatureRows />
        <FeatureGrid />
        <Comparison />
        <ClosingCta />
      </main>
      <SiteFooter />
      <WaitlistModal />
    </>
  );
}
