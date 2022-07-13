import React from 'react'
import ProjectContent from './ProjectContent'

const data = [
    {
        title:'Smoke Mid & Madly Gaming',
        description:'Organized E-sports Tournaments, Helped in hosting one of the biggest PUBG Mobile tournament in Bangladesh, Organized E-sports Tournaments, Helped in hosting one of the biggest PUBG Mobile tournament in Bangladesh'
    },
    {
        image:'/assets/projects/img1.webp'
    },
    {
        image:'/assets/projects/img2.webp'
    },
    {
        url:'https://www.facebook.com/SmokeMidBD/videos/325753171418683/?t=0'
    }
]


const ProjectItem = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {data.map((item)=>{
            return <ProjectContent title={item.title} description={item.description} image={item.image} url={item.url}/>
        })}
    </div>
  )
}

export default ProjectItem