'use client'
import dynamic from 'next/dynamic';
import { WaterWaveWrapper } from "@/components/visualEffects/water-wave-wrapper";
import LandingSection from "@/pages/landing";
import FeaturedSection from "@/pages/featured";
import AboutSection from "@/pages/about";

export default function Home() {
  return (
    // <WaterWaveWrapper imageUrl="" dropRadius="3" perturbance="3" resolution="2048">
    //   {()=>
      <div className="pb-8"> 
          <LandingSection />
          <FeaturedSection />
          <AboutSection />
      </div>
    //     }
    // </WaterWaveWrapper>
  );
}
