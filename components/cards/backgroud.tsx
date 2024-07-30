import { Card } from "../ui/card";

function BackgroundCard() {
  return (
    <Card className="md:h-full" title="About Me">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.8] text-[16px]">
          I hail from Alwar, a small town in India, where my journey began with modest beginnings. Growing up, I faced various challenges, but these experiences only fueled my determination to strive for more. <br />
          <br />
          My passion for technology has been a constant throughout my life. I have always been fascinated by the potential of technology to solve problems and improve lives. This interest led me to excel in <span className="text-white underline">Data Structures and Algorithms</span>, where I have honed my skills and gained a deep understanding of complex problem-solving techniques. <br />
          <br />
          Outside of my academic pursuits, I find joy in playing <span className="text-white underline">volleyball</span> and <span className="text-white underline">reading books</span>. Volleyball has been a source of both excitement and discipline for me, while reading allows me to explore new worlds and ideas. Together, these interests balance my life and keep me motivated. <br />
          <br />
          I also have a passion for <span className="text-white underline">teaching</span>, as I love sharing knowledge and helping others grow. As I continue to grow and evolve, I remain committed to leveraging my skills and passions to contribute to the field of technology and beyond.
        </p>
      </div>
    </Card>
  );
}

export default BackgroundCard;

