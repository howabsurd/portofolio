import React from 'react'
import { Card } from '../ui/card'
import HTMLImage from "@/public/assets/images/tech/HTML5_logo_and_wordmark.svg"
import { ToolTip } from '../ui/Tooltip'
import { stackData } from '@/data/stack'

function StackCard() {
    return (
      <Card title="My Tech Stack">
        <div className='flex flex-col gap-6 mt-2'>
          {stackData.map((tech, i) => (
            <div key={i} className='grid items-center gap-[90px]' style={{ gridTemplateColumns: "50px 1fr" }}>
              <div className='h-auto flex-none break-words whitespace-pre'>
                <p className='text-secondary-foreground'>{tech.title}</p>
              </div>
              <div className='flex gap-4'>
                {tech.stack.map((t) => (
                  <ToolTip key={t?.id} title={t.title} image={t.image} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    )
  }

export default StackCard