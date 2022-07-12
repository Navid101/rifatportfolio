import '../styles/globals.css'
import {motion} from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps,router }) {
  return (
    <>
    <Header/>
    <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
      pageInitial:{
        opacity:0
      },
      pageAnimate:{
        opacity:1
      },
      transition:{
        duration:.8,
        
      }

    }}>
      <Component {...pageProps} />
    </motion.div>
    <Footer/>
    </>
  )
}

export default MyApp
