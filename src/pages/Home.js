import React from 'react'
import Hero from '../components/Hero'
import Works from '../components/Works'
import Film from '../components/Film'
import Contact from '../components/Contact'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
         <Hero/> 
        <Works/>
        <Film/>
        <Contact/>
   </Layout>
  )
}

export default Home