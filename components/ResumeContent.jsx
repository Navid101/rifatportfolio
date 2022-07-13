import React from 'react'

const ResumeContent = ({time,subject,description}) => {
  

        if(subject){
            return(
                <div className="grid lg:grid-cols-3 pt-1">
                    <span className=''>{time}</span>
                    <div className="w-full col-span-2">
                        <h1 className='font-bold'>{subject}</h1>
                        <h1 className=''>{description}</h1>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="grid grid-cols-1 pt-1">
                    <h1 className='text-center lg:text-left'>{description}</h1>
                </div>
            )
        }

  
}

export default ResumeContent