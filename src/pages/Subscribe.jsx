import React from 'react'
import Hero from '../components/Home/Hero'

const Subscribe = () => {
  return (
    <div className='px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto flex flex-col gap-[120px] pb-[120px] md:gap-[141px] md:pb-[141px] lg:gap-[200px] lg:pb-[200px]'>
      <Hero isSubsribePage={true}/>
    </div>
  )
}

export default Subscribe