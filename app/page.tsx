"use client"

import Image from "next/image";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { WaterWaveWrapper } from "@/components/visualEffects/water-wave-wrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoHomeFill } from "react-icons/go";
import { Input } from "@/components/ui/input";
import { FaArrowRight, FaDownload, FaUser } from "react-icons/fa";
import { TextArea } from "@/components/ui/text-area";
import { Profile } from "@/components/ui/profile";
import { FancyButton } from "@/components/ui/fancy-button";
import { LiveClock } from "@/components/ui/live-clock";
import { MagneticWrapper } from "@/components/visualEffects/magnetic-wrapper";
import ScrollDown from "@/components/ui/scroll-down";
import LandingSection from "@/pages/landing";
import FeaturedSection from "@/pages/featured";
import AboutSection from "@/pages/about";

export default function Home() {
  return (
    <WaterWaveWrapper imageUrl="" dropRadius="3" perturbance="3" resolution="2048">
      {()=>
      <div className="pb-8"> 
          <LandingSection />
          <FeaturedSection />
          <AboutSection />
      </div>
        }
    </WaterWaveWrapper>
  );
}
