import React from 'react'
import ContactItem from '../components/ContactItem'

const contact = () => {
  return (
    <div className='container px-8 lg:px-64 m-auto space-y-12 flex flex-col items-center xl:items-start py-8 lg:py-28'>
        <p className='text-3xl lg:text-5xl font-medium'>Contact</p>
        <ContactItem></ContactItem>
        <span className='w-full h-[1px] bg-lightGray'></span>
    </div>
  )
}

export default contact