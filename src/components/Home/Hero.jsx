import React from 'react'
import { heroMobile, heroTablet, heroDesktop } from '../../images'
import { imageHeroWhitecupMobile, imageHeroWhitecupTablet, imageHeroWhitecupDesktop } from '../../images'
import { imageHeroBlackcupMobile, imageHeroBlackcupTablet, imageHeroBlackcupDesktop  } from '../../images'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'

const Hero = ({ isAboutPage, isSubsribePage, }) => {
 
  let mobileImage
  let tabletImage
  let desktopImage
  let header
  let content

  switch (true) {
    case isAboutPage:
      mobileImage = imageHeroWhitecupMobile
      tabletImage = imageHeroWhitecupTablet
      desktopImage = imageHeroWhitecupDesktop
      header = 'About Us'
      content = 'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'
      break;
    case isSubsribePage:
      mobileImage = imageHeroBlackcupMobile
      tabletImage = imageHeroBlackcupTablet
      desktopImage = imageHeroBlackcupDesktop
      header = 'Create a plan'
      content = 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
      break;
    default:
      mobileImage = heroMobile
      tabletImage = heroTablet
      desktopImage = heroDesktop
      header = 'Great coffee made simple.'
      content = 'Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.'
  }

  const navigate = useNavigate()

  return (
    <div className='relative px-6 py-[100px] md:px-[58px] md:py-[104px] lg:py-[117px] lg:px-[86px]'>
      <img className='absolute md:hidden inset-0 h-full w-full object-cover object-center rounded-lg' src={mobileImage} />
      <img className='hidden md:block absolute inset-0 h-full w-full object-cover object-center rounded-lg lg:hidden' src={tabletImage} />
      <img className='hidden lg:block absolute inset-0 h-full w-full object-cover object-center rounded-lg' src={desktopImage} />
      <div className='absolute inset-0 bg-black bg-opacity-25 rounded-lg'></div>
      <div className='relative flex flex-col gap-6 lg:gap-8'>
        <h1 className={`font-fraunces text-lightCream text-center text-[40px] font-bold leading-10 md:text-left md:w-[60%] md:text-[48px] md:leading-[48px] lg:text-[72px] lg:leading-[72px] ${isAboutPage && 'text-[28px] leading-7 md:text-[32px] md:leading-10 lg:text-[40px] lg:leading-[48px]'}`}>{header}</h1>
        <p className='text-lightCream/50 text-center text-[15px] leading-6 md:text-left md:w-[65%] lg:w-[40%]'>{content}</p>
        {!isAboutPage && !isSubsribePage && (
          <div className='text-center mt-4 md:text-left lg:mt-6'>
            <Button 
              text='Create Your Plan' 
              isHomePage={true} 
              onClick={() => navigate('/subscribe')}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero