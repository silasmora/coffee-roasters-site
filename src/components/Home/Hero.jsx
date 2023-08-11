import React from 'react'
import { heroMobile, heroTablet, heroDesktop } from '../../images'
import { Button } from '../Button'

const Hero = () => {
  return (
    <div className='relative px-6 py-[100px] md:px-[58px] md:py-[104px] lg:py-[117px] lg:px-[86px]'>
      <img className='absolute md:hidden inset-0 h-full w-full object-cover object-center rounded-lg' src={heroMobile} />
      <img className='hidden md:block absolute inset-0 h-full w-full object-cover object-center rounded-lg' src={heroTablet} />
      <img className='hidden lg:block absolute inset-0 h-full w-full object-cover object-center rounded-lg' src={heroDesktop} />
      <div className='absolute inset-0 bg-black bg-opacity-25 rounded-lg'></div>
      <div className='relative flex flex-col gap-6 lg:gap-8'>
        <h1 className='font-fraunces text-lightCream text-center text-[40px] font-bold leading-10 md:text-left md:w-[60%] md:text-[48px] md:leading-[48px] lg:text-[72px] lg:leading-[72px]'>Great coffee made simple.</h1>
        <p className='text-lightCream/50 text-center text-[15px] leading-6 md:text-left md:w-[65%] lg:w-[40%]'>Start your mornings with the world’s best coffees. Try our expertly curated artisan 
        coffees from our best roasters delivered directly to your door, at your schedule.</p>
        <div className='text-center mt-4 md:text-left lg:mt-6'>
          <Button text='Create Your Plan'/>
        </div>
      </div>
    </div>
  )
}

export default Hero