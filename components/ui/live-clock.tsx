'use client'

import moment from "moment-timezone";
import { FC, useEffect, useState } from "react"

interface LiveClockProps{
    timeZone : string
}

export const LiveClock : FC<LiveClockProps> = ({timeZone}) => {
    const [time, setTime] = useState<string>("");


    useEffect(()=>{
        const updateClock = () => {
            const currentTime = moment.tz(timeZone).format("HH:mm");
            setTime(currentTime);
        }
        const intervalId = setInterval(updateClock,1000);

        // cleanUp interval on component unmount
        return ()=> clearInterval(intervalId)
    })


    return(
        <div className="flex items-center justify-center gap-[0.5vw] text-3xl text-secondary-foreground font-semibold">Calcutta, {time}</div>
    )
}
