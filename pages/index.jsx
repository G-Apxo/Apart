import Slider from '../src/components/Slider/slider'
import Contact from '../src/components/Contactform/contact'
import Partners from '../src/components/Partners/partners'
import Projectsmap from '../src/components/Projectsmap/Projectsmap'
import Layout from '../src/components/Layout/Layout'
// import Test from '../src/components/Test/Test'

export default function Home() {

  return (
    <div>
      <Layout>
        {/* <Test/> */}
        <Slider/>
        <Contact/>
        <Partners />
        <Projectsmap/>
      </Layout>
      </div>
  )
}