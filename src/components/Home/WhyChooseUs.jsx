import React, { useEffect } from 'react'
import { coffeeBean, gift, truck } from '../../images'
import intersectionObserver from '../../scrollAnimations'

const WhyChooseUs = () => {

  const reasonsToChooseUs = [
    {
      img: coffeeBean,
      name: 'Best Quality',
      description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
    },
    {
      img: gift,
      name: 'Exclusive benefits',
      description: 'Special offers and swag when you subscribe, including 30% off your first shipment.'
    },
    {
      img: truck,
      name: 'Free shipping',
      description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
    },
  ]

  useEffect(() => {
    intersectionObserver()
  })

  return (
    <div className='relative hide-right'>
      <div className='bg-2C343E h-3/5 rounded-[10px] absolute inset-0 lg:h-4/5'></div>

    
      <div className='relative bg-gray-700 rounded-t-[10px] px-6 pt-16 pb-[28px] flex flex-col items-center justify-center md:pb-[12px] md:bg-2C343E'>
        <h1 className='font-fraunces text-[28px] text-center text-lightCream font-bold leading-7 pb-6 md:text-[32px]'>Why Choose us?</h1>
        <p className='text-[15px] text-center text-lightCream text-opacity-80 leading-[25px] md:px-16 lg:w-[56%]'>A large part of our role is choosing which particular coffees will be featured 
        in our range. This means working closely with the best coffee growers to give 
        you a more impactful experience on every level.</p>
      </div>
      
      <div className='relative rounded-b-[10px] pt-[36px] px-6 md:px-[58px] lg:px-[85px] md:pt-[58px] flex flex-col gap-6 lg:flex-row'>
        {reasonsToChooseUs.map((reason, idx) => (
          <div key={idx} className='bg-darkCyan flex flex-col items-center justify-center gap-14 rounded-lg px-[33px] pt-[72px] pb-[51px] md:flex-row md:py-[41px] md:px-[70px] lg:flex-col lg:px-10 lg:py-12 lg:mb-0'>
            <img className='h-[72px] w-[72px] md:h-[56px] md:w-[56px] lg:h-[72px] lg:w-[72px] lg:mt-6' src={reason.img}/>
            <div className='flex flex-col gap-4'>
              <h1 className='text-lightCream text-center font-fraunces text-2xl font-bold leading-8 md:text-left lg:text-center'>{reason.name}</h1>
              <p className='text-lightCream text-center text-[15px] leading-[25px] md:text-left lg:text-center'>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs