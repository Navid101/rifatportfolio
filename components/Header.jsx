import React from 'react'
import Logo from './Logo'
import NavContainer from './NavContainer'

const Header = () => {
  return (
    <div>
        <div className="bg-lightGray w-full py-4">
            <div className='flex container px-8 m-auto md:space-x-6'>
                <Logo/>
                <NavContainer/>
            </div>
        </div>
    </div>
  )
}

export default Header