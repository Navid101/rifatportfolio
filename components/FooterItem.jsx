import React from 'react'
import Link from 'next/link'
const FooterItem = ({title,content}) => {
  return (
    <div className='flex flex-col items-center md:items-start space-y-1'>
        <h1 className='text-lg font-medium'>{title}</h1>
        {title==='Email'? <Link href={`mailto:${content}`} passHref><a target="_blank">{content}</a></Link>: <h1>{content}</h1>}
    </div>
  )
}

export default FooterItem