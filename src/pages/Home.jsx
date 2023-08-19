import React from 'react'
import Hero from '../components/Home/Hero'
import OurCollection from '../components/Home/OurCollection'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import HowItWorks from '../components/Home/HowItWorks'

const Home = () => {
  return (
    <div className='px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto flex flex-col gap-[120px] pb-[120px] md:gap-[141px] md:pb-[141px] lg:gap-[200px] lg:pb-[200px]'>
      <Hero />
      <OurCollection />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  )
}

export default Home