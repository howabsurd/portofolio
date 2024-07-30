import React, { FC } from 'react'

interface HeadingProps{
    number : string;
    title_1 : string;
    title_2 : string;
}


export const Heading: FC<HeadingProps> = ({number, title_1, title_2}) => {
  return (
    <div className='relative my-10 px-8 z-20'>
        {/* Number */}
        <div className='outline-none flex flex-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre-wrap'>
            <h2 className='font-lancelot text-[180px] text-center text-primary-foreground relative'>
                <span className='bottom_fade bg-clip-text text-transparent p-4'>{number}</span>
            </h2>
        </div>
    </div>
  )
}
