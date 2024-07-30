
import { Card } from "../ui/card"

function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
        <div>
            <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
                Originating from a humble beginning in a &nbsp;
                <span className="text-white underline">Alwar city from India</span>
                ,my early years were marked by enduring harsh living conditions.
                However, fortune smiled upon me when, at age of 7, my family
                relocated to a small city, opening doors to new opportunity. <br />
                <br />
                <span className="text-white underline"> It was amidst of transition</span>
                &nbsp; that my profound fascination with &nbsp;
            </p>
        </div>
    </Card>
  )
}

export default BackgroundCard