import React from 'react'
import Image from "next/image";
import ReactPlayer from 'react-player';

const ProjectContent = ({title,description, image, url}) => {
  if(title){
    return (
        <div className='flex flex-col space-y-6'>
            <h1 className='text-2xl font-medium'>{title}</h1>
            <div className='flex flex-col space-y-2'>
                {description.split(", ").map((item=>{
                    return <h1 className='text-lg'>• {item}</h1>
                }))}
            </div>
        </div>
      )
  }else if(image){
    return (
        <Image src={`${image}`} width="490px" height="331px" layout='responsive'></Image>
    )
  }else if(url){
    return (
        <ReactPlayer url={url} width="490x" height="360px"></ReactPlayer>
    )
  }
}

export default ProjectContent