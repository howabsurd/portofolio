import React from 'react'
import { Timeline, TimelineItem } from '../ui/timeline'
import { Card } from '../ui/card'

function ExperienceCard() {
  return (
    <Card title="My Experience">
        <Timeline>
            {experienceData.map((experience,i)=>(
                <TimelineItem key={i} date={experience.date} title={experience.title} subTitle={experience.subTitle} link={experience.link} tag={experience.tag}/>
            ))}
        </Timeline>
    </Card>
  )
}

const experienceData = [{
    date : "Jan 2023-May 2023",
    title : "Full Stack Developer Intern",
    subTitle : "The RR Group",
    link : "https://www.therrgroup.in/",
    tag : "Remote"
},{
    date : "Jan 2023-May 2023",
    title : "MERN Developer",
    subTitle : "The RR Group",
    link : "https://www.therrgroup.in/",
    tag : "Remote"
}
]

export default ExperienceCard