import React from 'react'

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
          description:'Majoring in CIM with Minor In E-business with a CGPA of 3.08.'
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
    <div className='container px-8 md:px-[295px] m-auto space-y-6 flex flex-col items-center md:items-start py-8 md:py-28'>
        <p className='text-3xl md:text-4xl font-medium'>Resume</p>
        

    </div>
  )
}

export default resume