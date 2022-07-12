import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
const NavContainer = () => {
  return (
    <div className='flex flex-col justify-center space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between w-full'>
        <NavLeft/>
        <NavRight/>
    </div>
  )
}

export default NavContainer