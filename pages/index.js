import Image from "next/image";
import Bio from "../components/Bio";


export default function Home() {
  return (
    <div className="w-full bg-darkBlack py-28">
      <div className="container px-8 m-auto  flex justify-center items-center space-x-28">
        <Image src="/assets/rifat.webp" width="480px" height="480px" className="rounded-full"></Image>
        <Bio/>
      </div>
    </div>
  )
}
