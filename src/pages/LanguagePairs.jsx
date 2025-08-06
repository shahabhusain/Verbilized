import React from 'react'
import Hero from '../components/ServicePages/LanguagePairs/Hero'
import Connects from '../components/ServicePages/LanguagePairs/Connects'
import Box from '../components/ServicePages/LanguagePairs/Box'
import YouGet from '../components/ServicePages/LanguagePairs/YouGet'
import Frequently from '../components/ServicePages/Translation/Frequently'

const LanguagePairs = () => {
  return (
    <div>
        <Hero />
        <Connects />
        <Box />
        <YouGet />
        <Frequently />
    </div>
  )
}

export default LanguagePairs