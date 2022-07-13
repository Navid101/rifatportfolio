import React from 'react'
import ResumeContent from './ResumeContent'

const ResumeItem = ({title, content}) => {
  return (
    <div className='grid grid-cols-3 space-x-24 w-full'>
        <h1 className='text-3xl font-medium w-full'>{title}</h1>
        <div className="flex flex-col items-start space-y-6 col-span-2">
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