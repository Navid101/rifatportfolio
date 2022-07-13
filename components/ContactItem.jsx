import React,{useState,useRef} from 'react'
import emailjs from "@emailjs/browser"
import {motion} from 'framer-motion'
import Letter from './Letter'

const ContactItem = () => {
  const formRef = useRef()
  const [message,setMessage] = useState(false)
  const [name,setName] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault()
    setMessage(true)
    emailjs.sendForm('service_e0yt0zb', 'template_pj3ex6p', formRef.current, 'ys6s4I5Qhrr2CSY_2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <>
    {!message?
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col xl:grid xl:grid-cols-2 gap-6 w-full'>
      <div className='flex flex-col items-center xl:items-start space-y-2'>
        <h1>First Name</h1>
        <input type="text" name='user_name' className='outline-none border w-1/2 py-1 border-darkBlack text-darkBlack peer' onChange={(e)=>setName(e.target.value)}></input>
      </div>
      <div className='flex flex-col items-center xl:items-start space-y-2'>
        <h1>Last Name</h1>
        <input type="text" name='last_name' className='outline-none border w-1/2 py-1 border-darkBlack text-darkBlack '></input>
      </div>
      <div className='flex flex-col items-center xl:items-start space-y-2'>
        <h1>Email*</h1>
        <input type="email" name='user_email' className='outline-none border w-1/2 py-1 border-darkBlack text-darkBlack ' required></input>
      </div>
      <div className='flex flex-col items-center xl:items-start space-y-2'>
        <h1>Subject</h1>
        <input type="text" name='user_subject' className='outline-none border w-1/2 py-1 border-darkBlack text-darkBlack '></input>
      </div>
      <div className='flex flex-col items-center xl:items-start space-y-2 col-span-2'>
        <h1>Message</h1>
        <textarea type="text" name='message' className='outline-none border w-full lg:w-1/2 h-[300px] py-1 border-darkBlack text-darkBlack ' required></textarea>
      </div>
      <button className='bg-darkBlack self-center text-paleWhite p-1 xl:p-2 rounded w-1/4 lg:w-1/6'>Send</button>
    </form>:
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}>
      <Letter name={name}></Letter>
    </motion.div>
    }
    </>
  )
}

export default ContactItem