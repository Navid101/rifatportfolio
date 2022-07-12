import Link from 'next/link'
import React from 'react'

const NavRight = () => {
    
  return (
    <div className='flex items-center justify-between md:justify-center space-x-4'>
        <Link href="/resume" passHref><a className='transition hover:text-fadeOrange ease duration-300'>Resume</a></Link>
        <span className='h-[20px] w-[1px] bg-darkBlack'></span>
        <Link href="/projects" passHref><a className='transition hover:text-fadeOrange ease duration-300'>Projects</a></Link>
        <span className='h-[20px] w-[1px] bg-darkBlack'></span>
        <Link href="/contact" passHref><a className='transition hover:text-fadeOrange ease duration-300'>Contact</a></Link>
    </div>
  )
}

export default NavRight