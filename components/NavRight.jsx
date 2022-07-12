import Link from 'next/link'
import React from 'react'

const NavRight = () => {
    
  return (
    <div className='flex items-center space-x-4'>
        <Link href="/resume" passHref><a>Resume</a></Link>
        <span className='h-[25px] w-[1px] bg-darkBlack'></span>
        <Link href="/projects" passHref><a>Projects</a></Link>
        <span className='h-[25px] w-[1px] bg-darkBlack'></span>
        <Link href="/contact" passHref><a>Contact</a></Link>
    </div>
  )
}

export default NavRight