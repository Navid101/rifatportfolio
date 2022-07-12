import { LinkedIn, Twitter } from '@mui/icons-material'

import React from 'react'
import FooterItem from './FooterItem'
import Link from 'next/link'

const Footer = () => {
    const items = [
        {
            title:'Phone',
            content:'+8801799242166'
        },
        {
            title:'Email',
            content:'rifatbinazadniom@gmail.com'
        },
    ]
  return (
    <div className='container px-8 m-auto md:space-x-6 py-8'>
        <div className="flex flex-col space-y-6 md:space-y-1 items-center md:flex-row md:justify-between">
            {items.map((item,index)=>{
                return <FooterItem key={index} title={item.title} content={item.content} />
            })}
            <div className='flex flex-col space-y-1'>
                <h1 className='text-lg font-medium text-center'>Follow Me</h1>
                <div className="flex space-x-4 justify-center md:justify-start">
                    <Link href="https://www.linkedin.com/in/rifat-bin-azad-910192196/" passHref><a target="_blank"><LinkedIn></LinkedIn></a></Link>
                    <Link href="https://twitter.com/BinRifa" passHref><a target="_blank"> <Twitter></Twitter> </a></Link>             
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer