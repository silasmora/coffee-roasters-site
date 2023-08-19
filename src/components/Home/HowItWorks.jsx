import React, { useEffect } from 'react'
import { Button } from '../Button'
import { circle} from '../../images'
import intersectionObserver from '../../scrollAnimations'

const HowItWorks = () => {

  const steps = [
    {
      img: circle,
      step: '01',
      name: 'Pick your coffee',
      description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
    },
    {
      img: circle,
      step: '02',
      name: 'Choose the frequency',
      description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
    },
    {
      img: circle,
      step: '03',
      name: 'Receive and enjoy!',
      description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world -class coffees curated to provide a distinct tasting experience.'
    },
  ]

  useEffect(() => {
    intersectionObserver()
  })

  return (
    <div className='lg:px-[85px] hide-left'>
      <h1 className='font-fraunces text-grey text-center text-2xl font-bold leading-8 pb-[80px] md:text-left md:pb-10 lg:pb-20'>How it works</h1>
      <div className='md:flex'>
      {steps.map((step, idx) => (
        <div key={idx} className='flex flex-col gap-6 mb-14 md:mb-[44px] lg:mb-16 md:gap-12 lg:gap-[67px]'>
          <div className='hidden md:flex items-center'>
            <img className={`h-8 w-8 ${idx < 2 ? 'animate-wiggle' : ''}`} src={step.img} />
            {idx < 2 && <div className='border border-paleOrange h-[2px] w-full'></div>}
          </div>
          <div className='flex flex-col gap-6 md:gap-[42px] lg:gap-[38px]'>
            <h1 className='font-fraunces text-paleOrange text-center text-7xl font-bold leading-[72px] md:text-left md:-mt-[6px]'>{step.step}</h1>
            <h3 className='font-fraunces text-darkGreyBlue text-[28px] text-center font-bold leading-8 md:text-left md:w-[85%] md:-mb-[10px] lg:w-1/2 lg:mb-[5px]'>{step.name}</h3>
            <p className='text-darkGreyBlue text-[15px] text-center leading-[25px] md:text-left w-[95%] lg:w-[78%]'>{step.description}</p>
          </div>
        </div>
      ))}
      </div>
      <div className='text-center md:text-left'>
        <Button animate={true} text='Create your plan'/>
      </div>
    </div>
  )
}

export default HowItWorks