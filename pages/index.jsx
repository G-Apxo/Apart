import Slider from "./components/BetterSlider/Slider";
import Contact from "./components/Contactform/contact";
import Partners from "./components/Partners/partners";
import Projectsmap from "./components/Projectsmap/Projectsmap";
import Layout from "./components/Layout/Layout";
// import Test from '../src/components/Test/Test'

export default function Home() {
  return (
    <div>
      <Layout>
        {/* <Test/> */}
        <Slider />
        <Contact />
        <Partners />
        <Projectsmap />
      </Layout>
    </div>
  );
}
