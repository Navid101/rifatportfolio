import React from 'react'
import Link from 'next/link'
const NavLeft = () => {
  return (
    <div className='flex flex-col md:flex-row space-x-4 space-y-2 items-center justify-center md:space-y-0'>
        <Link href="/" passHref><a className='text-2xl md:w-1/2 font-bold'>Rifat Bin Azad</a></Link>
        <h1 className="bg-fadeOrange w-[35px] h-[1px] top-1.5 block md:hidden "></h1>
        <h1>Digital Marketer</h1>
    </div>
  )
}

export default NavLeft