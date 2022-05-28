import Slider from '../src/components/Slider/slider'
import Contact from '../src/components/Contactform/contact'
import Partners from '../src/components/Partners/partners'
import Projectsmap from '../src/components/Projectsmap/Projectsmap'
import Layout from '../src/components/Layout/Layout'

export default function Home() {

  return (
    <div>
      <Layout>
        <Slider/>
        <Contact/>
        <Partners/>
        <Projectsmap/>
      </Layout>
      </div>
  )
}