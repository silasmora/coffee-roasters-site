import React from 'react'
import { unitedKingdom, canada, australia } from '../../images'

export const OurHeadquarters = () => {

  const headquarters = [
    {
      img: unitedKingdom,
      location: 'United Kingdom',
      address: '68 Asfordby Rd, Alcaston, SY6 1YA, +44 1241 918425'
    },
    {
      img: canada,
      location: 'Canada',
      address: '1528 Eglinton Avenue, Toronto, Ontario M4P 1A6, +1 416 485 2997'
    },
    {
      img: australia,
      location: 'Australia',
      address: '36 Swanston Street, Kewell, Victoria, +61 4 9928 3629'
    }
  ]
  return (
    <div className='lg:px-[85px]'>
      <h1 className='font-fraunces text-grey text-center text-2xl font-bold leading-8 -mb-2 md:text-left'>Our Headquarters</h1>
      <div className='md:flex'>
        {headquarters.map((element, idx) => (
          <div key={idx} className='flex flex-col items-center gap-[22px] pt-[80px] md:items-start md:w-1/3 lg:gap-6'>
            <img src={element.img} alt="country" />
            <h1 className='font-fraunces text-darkGreyBlue text-[24px] text-center font-bold leading-9 pt-[26px] lg:pt-[24px]'>{element.location}</h1>
            <div>
              {element.address.split(', ').map((line, lineIndex) => (
              <p key={lineIndex} className='text-darkGreyBlue text-[16px] text-center leading-[26px] md:text-left'>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
  </div>
  )
}
