
import Header from '../src/components/Header/Header'
import Slider from '../src/components/Slider/slider'
import Contact from '../src/components/Contactform/contact'
import Blog from '../src/components/Blog/Blog'
import Partners from '../src/components/partners/partners'
import Footer from '../src/components/Footer/footer'
import { About } from './about/About'
import Layout from '../src/components/Layout/Layout'
export default function Home() {

  return (
    <div>
      <Layout>

      
      <About/>
      {/* <Header/>
     <Slider/>
       <Contact/>
      <Blog/>
      <Partners/>
      <Footer/> */}
      </Layout>
      </div>
  )
}