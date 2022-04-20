
import Header from '../src/components/Header/Header'
import Slider from '../src/components/Slider/slider'
import Contact from '../src/components/Contactform/contact'
import Blog from '../src/components/Blog/Blog'
import Partners from '../src/components/partners/partners'
import Footer from '../src/components/Footer/footer'
export default function Home() {

  return (
    <div>
      <Header/>
     <Slider/>
       <Contact/>
      <Blog/>
      <Partners/>
      <Footer/>
      </div>
  )
}