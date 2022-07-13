import React from 'react'

const ResumeContent = ({time,subject,description}) => {
  

        if(subject){
            return(
                <div className="grid grid-cols-3 pt-1">
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
                    <div className="flex flex-col space-y-3">
                        <h1 className=''>{description}</h1>
                    </div>
                </div>
            )
        }

  
}

export default ResumeContent