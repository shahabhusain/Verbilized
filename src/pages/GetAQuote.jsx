import React from 'react'
import Hero from '../components/getAQuote/Hero'
import Frequently from '../components/ServicePages/Translation/Frequently'
import Contactss from '../components/getAQuote/Contactss'
import { ScrollRestoration } from 'react-router-dom'

const GetAQuote = () => {
  return (
    <div>
            <ScrollRestoration />
      <Hero />
           <Contactss />
      <Frequently />
 
    </div>
  )
}

export default GetAQuote