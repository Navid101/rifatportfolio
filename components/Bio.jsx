import React from 'react'

const Bio = () => {
  return (
    <div className='flex flex-col items-center md:items-start space-y-3'>
        <h1 className='text-6xl md:text-8xl text-paleWhite'>Hello</h1>
        <div className="flex flex-col items-center md:items-start w-[350px] md:pl-2 space-y-2">
            <h3 className='text-2xl text-paleWhite'>A Bit About Me</h3>
            <h3 className='text-base text-paleWhite text-center md:text-left'>A quick thinking individual with a bent towards communicating and building a relationship online. Well versed with digital marketing tools and strategies. Skilled at integrated marketing methodologies and can drive brand awareness.</h3>
        </div>
    </div>
  )
}

export default Bio