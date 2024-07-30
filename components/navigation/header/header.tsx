import { FancyButton } from '@/components/ui/fancy-button'
import { Profile } from '@/components/ui/profile'
import { MagneticWrapper } from '@/components/visualEffects/magnetic-wrapper'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Header() {
  return (
    <div className='w-full flex items-center justify-center md:justify-between'>
      <Profile />
      <div className='hidden md:inline'>
        <MagneticWrapper>
          <FancyButton text="Lets talk" icon={<FaArrowRight/>} />
        </MagneticWrapper>
      </div>
    </div>
  )
}

export default Header