import React, {useEffect} from 'react'
import { imageQualityMobile, imageQualityTablet, imageQualityDesktop } from '../../images'
import intersectionObserver from '../../scrollAnimations'

const UncompromisingQuality = () => {

  useEffect(() => {
    intersectionObserver()
  })

  return (
    <div className='hide-right bg-2C343E rounded-[10px] px-6 pb-[61px] flex flex-col gap-16 md:pb-[67px] md:px-[74px] mt-20 md:mt-[160px] lg:flex-row lg:px-[85px] lg:mt-20 lg:gap-[125px]'>
      <img className='md:hidden h-full w-full object-cover object-center rounded-lg -mt-20' src={imageQualityMobile} alt='Quality image'/>
      <img className='hidden md:block h-full w-full object-cover object-center rounded-lg -mt-40 lg:hidden' src={imageQualityTablet} alt='Quality image'/>
      <img className='hidden lg:block h-full w-full object-cover object-center rounded-lg -mt-20' src={imageQualityDesktop} alt='Quality image'/>
      <div className='text-lightCream lg:-order-1 lg:pt-[100px]'>
        <h2 className='font-fraunces text-[28px] text-center font-bold leading-[28px] pb-6 md:text-[32px] md:leading-[48px] lg:text-left lg:text-[40px] lg:leading-[48px] lg:pb-8'>Uncompromising quality</h2>
        <p className='text-[15px] text-center leading-6 opacity-80 lg:text-left lg:text-[16px] lg:leading-[26px]'>Although we work with growers who pay close attention to all stages of harvest and processing, 
        we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the 
        coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
        consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
      </div>
    </div>
  )
}

export default UncompromisingQuality