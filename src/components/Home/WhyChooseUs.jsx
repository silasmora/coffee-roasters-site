import React from 'react'
import { coffeeBean, gift, truck } from '../../images'

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
  return (
    <div className=''>
      <div className='bg-2C343E rounded-t-[10px] px-6 pt-16 pb-[28px] flex flex-col items-center justify-center md:bg-gray-800 md:pb-[12px]'>
        <h1 className='font-fraunces text-[28px] text-center text-lightCream font-bold leading-7 pb-6 md:text-[32px]'>Why Choose us?</h1>
        <p className='text-[15px] text-center text-lightCream text-opacity-80 leading-[25px] md:px-12 lg:w-[56%]'>A large part of our role is choosing which particular coffees will be featured 
        in our range. This means working closely with the best coffee growers to give 
        you a more impactful experience on every level.</p>
      </div>
      <div className='bg-gray-800 h-[633px] rounded-b-[10px] p-6 md:p-[58px] md:h-[350px] lg:px-[85px] lg:flex gap-6 lg:h-[280px]'>
        {reasonsToChooseUs.map((reason, idx) => (
          <div key={idx} className='bg-darkCyan flex flex-col items-center justify-center gap-14 rounded-lg mb-6 px-[33px] pt-[72px] pb-[51px] md:flex-row md:py-[41px] md:px-[70px] lg:h-[382px] lg:flex-col lg:px-10 lg:py-0'>
            <img className='h-[72px] w-[72px] md:h-[56px] md:w-[56px] lg:h-[72px] lg:w-[72px]' src={reason.img}/>
            <div className='flex flex-col gap-4'>
              <h1 className='text-lightCream text-center font-fraunces text-2xl font-bold leading-8 md:text-left lg:text-center'>{reason.name}</h1>
              <p className='text-lightCream text-center text-[15px] leading-[25px] md:text-left lg:text-center'>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='h-[590px] md:h-[290px] lg:h-40' />
    </div>
  )
}

export default WhyChooseUs