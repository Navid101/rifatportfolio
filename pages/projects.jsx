import React from 'react'
import ProjectItem from '../components/ProjectItem'

const projects = () => {
  return (
    <div className='container px-8 lg:px-64 m-auto space-y-12 flex flex-col items-center lg:items-start py-8 lg:py-28'>
        <p className='text-3xl lg:text-5xl font-medium'>Projects</p>
        <div className="flex flex-col w-full">
          <ProjectItem/>
        </div>
        <span className='w-full h-[1px] bg-lightGray'></span>
    </div>
  )
}

export default projects