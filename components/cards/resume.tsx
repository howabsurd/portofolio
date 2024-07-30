import {Card} from "../ui/card";
import Image from "next/image";
import MySignature from "@/public/assets/images/signature.png"
import { Button } from "../ui/button";
import { FaDownload } from "react-icons/fa";

export const ResumeCard = () =>{
    return <Card className="md:h-full">
        <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        I am an experienced Software Development Engineer (SDE) with 1.5 years of specialization in the MERN stack, adept at developing scalable web applications. With strong problem-solving skills demonstrated by solving over 600 LeetCode problems, I excel in both front-end and back-end development, ensuring robust and efficient solutions. My passion for continuous learning keeps me updated with the latest technologies, and I am dedicated to contributing to complex projects. Proficient in API development, version control, and performance optimization, I strive to deliver high-quality software solutions that meet diverse business needs.
        </p>
        {/* Signature */}
        <div className="invert">
            <Image src={MySignature} alt="Krish Poptani" />
        </div>
        {/* Social and resume button */}
        <div className="flex items-center justify-between  md:w-[calc(100%-48px)]">
            {/* Socials */}
            <Button link="csac">
                <FaDownload />
                Resume
            </Button>
        </div>
    </Card>
}