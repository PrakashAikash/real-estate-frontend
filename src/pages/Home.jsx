import React from 'react'
import Hero from '../components/Hero'
import Properties from '../components/propertiesshow'
import Companies from '../components/Companies'   
import Features from '../components/Features'

import Steps from '../components/Steps'
import Testimonials from '../components/testimonial'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
      <Hero />
       <Properties />
      <Companies />
      <Features />
     
      <Steps />
      <Testimonials />
      <Blog />
    </div>
  )
}

export default Home
