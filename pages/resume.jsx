import React from 'react'
import ResumeItem from '../components/ResumeItem'

const resume = () => {
  const data = [
    {
      title:'Work Experience',
      content:[
        {
          time:'2022 - Present',
          subject:'Course Assistant',
          description:'I am working for Open Society University Network (OSUN), which is a is a global network of educational institutions that integrates learning and the advancement of knowledge—in the social sciences, the humanities, the sciences and the arts, on undergraduate and graduate levels—across geographic and demographic boundaries, promotes civic engagement on behalf of open societies, and expands access to higher education for underserved communities.'
        },
        {
          time:'2020 - 2021',
          subject:'Media & Marketing Analytics (Intern)',
          description:'I worked at X - Integrated Marketing Agency and worked on the following ·Looking at Past data and making decisions. ·Managing Existing clients. ·Run Ads on Social Media Platforms. ·Assisting the team to achieve sales targets. ·Conducting product-based research and generating ideas for product Marketing. ·Assist Marketing Team.'
        },
        {
          time:'2019 - 2020',
          subject:'Coordinator & Adviser for (Smoke Mid & Madly Gaming)',
          description:'Organized E-sports Tournaments.  Helped in hosting one of the biggest PUBG Mobile tournament in Bangladesh . Organized E-sports Tournaments.  Helped in hosting one of the biggest PUBG Mobile tournament in Bangladesh.'
        }
      ]
    },
    {
      title:'Education',
      content:[
        {
          time:'2016 - 2021',
          subject:"Brac University | Bachelor's Degree",
          description:'Majoring in Management Information Systems with Minor In E-business with a CGPA of 3.08.'
        },
        {
          time:'2013 - 2015',
          subject:"Dhaka commerce College | Higher Secondary School Certificate",
          description:'Passed HSC with GPA: 4.67'
        },
        {
          time:'2003 - 2013',
          subject:"Monipur High School & College | Secondary School Certificate",
          description:'Passed SSC with GPA: 4.44'
        }

      ]
    },
    {
      title:'CO-CURRICULAR ACTIVITIES AND TRAINING',
      content: [
        {
          description:'2016 | Certificate on General Learning about Robotics from Brac University Robotics Club.'
        },
        {
          description:'2019 | Certificate on Google Analytics.'
        },
        {
          description:'2021 | The fundamentals of digital marketing.'
        },
        {
          description:'2022 l Data Science for Everyone.'
        }
      ]
    }
  ]
  return (
    <div className='container px-8 lg:px-64 m-auto space-y-12 flex flex-col items-center lg:items-start py-8 lg:py-28'>
        <p className='text-3xl lg:text-5xl font-medium'>Resume</p>
        {data.map((item,index)=>{
          return (
            <>
            <ResumeItem key={index} title={item.title} content={item.content}></ResumeItem>
            <span className='w-full h-[1px] bg-lightGray '></span>
            </>
          )
        })}
    </div>
  )
}

export default resume