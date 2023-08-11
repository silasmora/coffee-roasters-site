import React from 'react'
import Hero from '../components/Home/Hero'
import OurCollection from '../components/Home/OurCollection'

const Home = () => {
  return (
    <div className='px-6 md:px-10 lg:px-20 max-w-7xl mx-auto'>
      <Hero />
      <OurCollection />
    </div>
  )
}

export default Home