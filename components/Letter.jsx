import React from 'react'

const Letter = ({name}) => {
  return (
    <div className="flex flex-col space-y-6">
        <h1 className='text-2xl md:text-3xl  md:text-left '>Dear {name},</h1>
        <h1 className='text-2xl md:text-3xl  md:text-left '>Thank you for reaching out to me</h1>
        <h1 className='text-2xl md:text-3xl  md:text-left '>I will get in touch with you soon</h1>
        <h1 className='text-2xl md:text-3xl  md:text-left '>Wishing you a wonderful day!</h1>
        <h1 className='text-2xl md:text-3xl  md:text-left '>Sincerely,</h1>
        <h1 className='text-2xl md:text-3xl  md:text-left '>Rifat</h1>
    </div>
  )
}

export default Letter