import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
const NavContainer = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        <NavLeft/>
        <NavRight/>
    </div>
  )
}

export default NavContainer