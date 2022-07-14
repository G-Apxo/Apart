import Slider from '../src/components/BetterSlider/Slider'
import Contact from '../src/components/Contactform/contact'
import Partners from '../src/components/Partners/partners'
import Projectsmap from '../src/components/Projectsmap/Projectsmap'
import Layout from '../src/components/Layout/Layout'
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import blogPosts from "./assets/posts.json";
import BlogCard from "./components/BlogCard";
// import Test from '../src/components/Test/Test'

export default function Home() {
  const { locale, locales, asPath } = useRouter();
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