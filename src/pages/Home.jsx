import React from 'react'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Services from '../components/Services'
import Voice from '../components/Voice'
import Trusted from '../components/Trusted'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Services />
      <Voice />
      <Trusted />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home