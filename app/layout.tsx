import type { Metadata } from "next";
import { Bricolage_Grotesque, Lancelot, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/grain-effect";
import { Cursor } from "@/components/cursor/cursor";

// Fonts for example
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({subsets: ["latin"], variable: "--font-oswald"});
const LancelotFont = Lancelot({
  subsets: ["latin"], variable: "--font-lancelot",
  weight: "400"
});

export const metadata: Metadata = {
  title: "KRISH POPTANI",
  description: "Krish Poptani official portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, OswaldFont.variable, LancelotFont.variable)}>
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
        </body>
    </html>
  );
}
