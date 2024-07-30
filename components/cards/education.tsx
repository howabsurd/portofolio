import React from 'react'
import { Timeline, TimelineItem } from '../ui/timeline'
import { Card } from '../ui/card'

function EducationCard() {
  return (
    <Card title="My Education">
        <Timeline>
            {educationData.map((education,i)=>(
                <TimelineItem key={i} date={education.date} title={education.title} subTitle={education.subTitle} link={education.link} tag={education.tag}/>
            ))}
        </Timeline>
    </Card>
  )
}

const educationData = [{
    date : "May 2019-May 2023",
    title : "Btech - Mechanical",
    subTitle : "PEC",
    link : "https://www.pec.ac.in/",
    tag : "Chandigarh"
},{
    date : "April 2016-May 2018",
    title : "12th Class - CBSE",
    subTitle : "Central Academy",
    link : "http://www.centralacademyalwar.in/",
    tag : "Alwar"
}
]

export default EducationCard;