import React, { FC } from 'react'

interface HeaderProps{
    title : string;
    tag : string;
}

export const Header : FC<HeaderProps> = ({title, tag}) => {
  return (
    <div className='bg-secondary-background flex flex-none flex-nowrap relative p-6 w-full items-center justify-between h-16 border border-border rounded-3xl'>
        <div>
            <p className='text-lg font-medium leading-3 text-primary-foreground'>{title}</p>
        </div>
        <div>
            <p className='text-lg font-medium leading-3 font-lancelot text-secondary-foreground'>{tag}</p>
        </div>
    </div>
  )
}
