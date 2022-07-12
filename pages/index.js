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
      } className="container px-8 m-auto flex flex-col items-center space-y-8 md:flex-row md:justify-center md:items-center md:space-x-28 md:space-y-0">
        <div className="w-1/2 md:w-1/3">
        <Image src="/assets/rifat.webp" width="480px" height="480px" layout="responsive" className="rounded-full"></Image>
        </div>
        <Bio/>
      </motion.div>
    </div>
  )
}
