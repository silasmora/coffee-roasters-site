import React from 'react'
import {granEspresso, granPlanalto, granPicollo, granDanche} from '../../images'

const OurCollection = () => {

  const items = [
    {
      imageSrc: granEspresso,
      itemName: 'Gran Espresso',
      description: 'Light and flavorful blend with cocoa and black pepper for an intense experience'
    },
    {
      imageSrc: granPlanalto,
      itemName: 'Planalto',
      description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
    },
    {
      imageSrc: granPicollo,
      itemName: 'Piccollo',
      description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry'
    },
    {
      imageSrc: granDanche,
      itemName: 'Danche',
      description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
    },
  ]
  return (
     <div className='relative'>
        <div className='relative pt-[27px] pb-[19px] opacity-60'>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-lightCream'></div>
          <h1 className='text-grey text-center font-fraunces text-[40px] font-bold leading-[72px] md:text-[96px] lg:text-[150px]'>our collection</h1>
        </div>
        <div className='md:absolute top-[60%] left-0 right-0 bottom-0 lg:flex lg:top-[210%]'>
        {items.map((item, idx) => (
          <div key={idx} className='px-6 flex flex-col gap-6 justify-center items-center md:flex-row pb-12 lg:flex-col lg:w-1/4'>
            <img className='h-[150px] w-[200px] md:h-[193px] md:w-[255px]' src={item.imageSrc} />
            <div className='flex flex-col gap-4 md:w-[282px] md:-mt-14 lg:pt-16 lg:w-full'>
              <h2 className='text-darkGreyBlue text-center font-fraunces text-2xl font-bold leading-8 md:text-left lg:text-center'>{item.itemName}</h2>
              <p className='text-darkGreyBlue text-[15px] text-center leading-6 md:text-left lg:text-center'>{item.description}</p>
            </div>
          </div>
        ))}
        </div>
     </div>
  )
}

export default OurCollection