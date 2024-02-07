import React from 'react'
import Hero from '../components/Hero'
import Works from '../components/Works'
import Film from '../components/Film'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import Services from '../components/Services'
const Home = () => {
  return (
    <Layout>
        <Contact/>
         {/* <Hero/>  */}
        <Works/>
         <Services/>
        <Film/>
   </Layout>
  )
}

export default Home