"use client"

import Image from "next/image";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { WaterWaveWrapper } from "@/components/visualEffects/water-wave-wrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoHomeFill } from "react-icons/go";
import { Input } from "@/components/ui/input";
import { FaUser } from "react-icons/fa";
import { TextArea } from "@/components/ui/text-area";
import { Profile } from "@/components/ui/profile";

export default function Home() {
  return (
    <WaterWaveWrapper imageUrl="" dropRadius="3" perturbance="3" resolution="2048">
      {()=> <div className="w-full p-10">
        <div className="max-w-2xl mx-auto">
        <Card title="ui component">
          <div className="grid grid-cols-4">
            <Button link="HELO">
              Basic Button
            </Button>
            <Button link="HELO">
              <GoHomeFill />
              Basic Button
            </Button>
            <Button link="HELO">
              <GoHomeFill />
            </Button>
            </div>
          <Input type="text" placeholder="Full Name"/>
          <Input type="text" placeholder="Full Name" icon={<FaUser/>  }/>
          <TextArea placeholder="Full Name" icon={<FaUser/>  }/>
          <Profile />
        </Card>
          </div>
        </div>}
    </WaterWaveWrapper>
  );
}
