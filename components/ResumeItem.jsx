import React from 'react'
import ResumeContent from './ResumeContent'

const ResumeItem = ({title, content}) => {
  return (
    <div className='grid lg:grid-cols-3 space-y-6 lg:space-y-0 lg:space-x-24 w-full'>
        <h1 className='text-2xl text-center lg:text-3xl lg:text-left font-medium w-full'>{title}</h1>
        <div className="flex flex-col items-center lg:items-start space-y-6 lg:col-span-2">
            {content && content.map((item,index)=>{
                return(
                    <ResumeContent key={index} time={item.time} subject={item.subject} description={item.description}></ResumeContent>
                )
            })}
        </div>
    </div>
  )
}

export default ResumeItem