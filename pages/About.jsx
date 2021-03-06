import Head from "next/head";
import { AboutBanner } from "../src/components/about/AboutBanner";
import Layout from "../src/components/Layout/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      {/* Layout wayper in nextjs */}
      <Layout>
        <AboutBanner/>
      </Layout>
    </>
  );
}
