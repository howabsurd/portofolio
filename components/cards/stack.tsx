import React from 'react'
import { Card } from '../ui/card'
import HTMLImage from "@/public/assets/images/tech/HTML5_logo_and_wordmark.svg"
import { ToolTip } from '../ui/Tooltip'

function StackCard() {
  return (
    <Card title="My Tech Stack">
        <div className='flex flex-col gap-6 mt-2'>
            <div className='grid items-center gap-[90px]' style={{gridTemplateColumns:"50px 1fr"}}>
                <div className='h-auto flex-none break-words whitespace-pre'>
                    <p className='text-secondary-foreground'>Frontend</p>
                </div>
            </div>
            <div className='grid items-center gap-[90px]' style={{gridTemplateColumns:"50px 1fr"}}>
                <div className='h-auto flex-none break-words whitespace-pre'>
                    <p className='text-secondary-foreground'>Frontend</p>
                </div>
                {/* ToolTip */}
                <div className='flex gap-4'>
                    <ToolTip title="HTML" image={HTMLImage} />
                </div>
            </div>
        </div>
    </Card>
  )
}

export default StackCard