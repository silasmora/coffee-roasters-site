import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ showOnFooter, showOnModal }) => {

  const navigationLinks = [
    {text: 'Home', route: '/'},
    {text: 'About Us', route: '/about'},
    {text: 'Create Your Plan', route: '/subscribe'}
  ]

  return (
    <div className={`${showOnFooter || showOnModal ? 'flex flex-col gap-4 md:flex-row md:gap-8' : 'hidden md:flex gap-8'}`}>
      {navigationLinks.map((item, idx) => (
        <ul key={idx}>
          <NavLink className={`${showOnFooter ? 'hover:text-lightCream' : 'hover:text-darkGreyBlue'} ${showOnModal ? 'font-fraunces text-darkGreyBlue text-2xl font-bold leading-8 relative' : 'text-xs text-grey font-semibold tracking-wider uppercase'} transition ease-in-out duration-300`} to={item.route}>{item.text}</NavLink>
        </ul>
      ))}
    </div>
  )
}

export default Navigation