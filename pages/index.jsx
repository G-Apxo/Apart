import Slider from '../src/components/Slider/slider'
import Contact from '../src/components/Contactform/contact'
import Partners from '../src/components/partners/partners'
import Layout from '../src/components/Layout/Layout'
export default function Home() {

  return (
    <div>
      <Layout>
        <Slider/>
        <Contact/>
        <Partners/>
      </Layout>
      </div>
  )
}