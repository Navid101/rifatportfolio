import Image from "next/image";
import Bio from "../components/Bio";
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <div className="w-full bg-darkBlack py-28">
      <motion.div initial="initial" animate="animate" variants={
        {
          initial:{
            opacity:0,
            y:60
          },
          animate:{
            opacity:1,
            y:0,
            transition:{
              duration:1,    
            }
          }
          
        }
      } className="container px-8 m-auto flex justify-center items-center space-x-28">
        <Image src="/assets/rifat.webp" width="480px" height="480px" className="rounded-full"></Image>
        <Bio/>
      </motion.div>
    </div>
  )
}
