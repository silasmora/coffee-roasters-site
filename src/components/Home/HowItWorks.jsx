import React from 'react'

const HowItWorks = () => {

  const steps = [
    {
      step: '01',
      name: 'Pick your coffee',
      description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
    },
    {
      step: '02',
      name: 'Choose the frequency',
      description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
    },
    {
      step: '03',
      name: 'Receive and enjoy!',
      description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world -class coffees curated to provide a distinct tasting experience.'
    },
  ]
  return (
    <div className='border-2'>
      <h1>How it works</h1>
      {steps.map((step, idx) => (
        <div>
          <h1 className='font-fraunces text-paleOrange text-center text-7xl font-bold leading-[72px]'>{step.step}</h1>
          <h3 className='font-fraunces text-darkGreyBlue text-[28px] text-center font-bold leading-8'>{step.name}</h3>
          <p className='text-darkGreyBlue text-[15px] text-center leading-[25px]'>{step.description}</p>
        </div>
      ))}
    </div>
  )
}

export default HowItWorks