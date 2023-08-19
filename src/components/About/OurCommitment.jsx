import React from 'react'
import { imageCommitmentMobile, imageCommitmentTablet, imageCommitmentDesktop } from '../../images'

const OurCommitment = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:gap-[69px] lg:gap-[125px] lg:px-[86px]'>
      <img className='md:hidden h-full w-full object-cover object-center rounded-lg' src={imageCommitmentMobile} alt='Our commitment image'/>
      <img className='hidden md:block h-full w-full object-cover object-center rounded-lg lg:hidden' src={imageCommitmentTablet} alt='Our commitment image'/>
      <img className='hidden lg:block h-full w-full object-cover object-center rounded-lg ' src={imageCommitmentDesktop} alt='Our commitment image'/>
      <div className='text-darkGreyBlue lg:pt-20'>
        <h2 className='font-fraunces text-[32px] text-center font-bold leading-[48px] pb-[30px] lg:text-left lg:text-[40px] lg:leading-[48px]'>Our commitment</h2>
        <p className='text-[15px] text-center leading-6 opacity-80 lg:text-left lg:text-[16px] lg:leading-[26px]'>We’re built on a simple mission and a commitment to doing good along the way. We want to 
        make it easy for you to discover and brew the world’s best coffee at home. It all starts 
        at the source. To locate the specific lots we want to purchase, we travel nearly 60 days 
        a year trying to understand the challenges and opportunities in each of these places.
        We collaborate with exceptional coffee growers and empower a global community of farmers 
        through with well above fair-trade benchmarks. We also offer training, support farm community 
        initiatives, and invest in coffee plant science. Curating only the finest blends, we roast 
        each lot to highlight tasting profiles distinctive to their native growing region.</p>
      </div>
    </div>
  )
}

export default OurCommitment