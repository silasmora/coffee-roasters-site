import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

  const navigationLinks = [
    {text: 'Home', route: '/'},
    {text: 'About Us', route: '/about'},
    {text: 'Create Your Plan', route: '/createyourplan'}
  ]

  return (
    <div className='hidden md:flex gap-8'>
      {navigationLinks.map((item, idx) => (
        <ul key={idx}>
          <NavLink className='text-xs text-grey font-semibold tracking-wider uppercase' to={item.route}>{item.text}</NavLink>
        </ul>
      ))}
    </div>
  )
}

export default Navigation