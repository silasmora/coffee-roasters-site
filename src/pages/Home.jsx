import React from 'react'
import Hero from '../components/Home/Hero'
import OurCollection from '../components/Home/OurCollection'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import HowItWorks from '../components/Home/HowItWorks'

const Home = () => {
  return (
    <div className='px-6 md:px-10 lg:px-20 max-w-7xl mx-auto'>
      <Hero />
      <OurCollection />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  )
}

export default Home