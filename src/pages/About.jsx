import React from 'react'
import Hero from '../components/Home/Hero'
import OurCommitment from '../components/About/OurCommitment'
import UncompromisingQuality from '../components/About/UncompromisingQuality'
import { OurHeadquarters } from '../components/About/OurHeadquarters'

const About = () => {
  return (
    <div className='px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto flex flex-col gap-[120px] pb-[120px] md:gap-[141px] md:pb-[141px] lg:gap-[200px] lg:pb-[200px]'>
      <Hero isAboutPage={true}/>
      <OurCommitment />
      <UncompromisingQuality />
      <OurHeadquarters />
    </div>
  )
}

export default About