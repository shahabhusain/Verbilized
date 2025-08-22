import React from 'react'
import Hero from '../components/ServicePages/VoiceoverServices/Hero'
import OneVoice from '../components/ServicePages/VoiceoverServices/OneVoice'
import Sectors from '../components/ServicePages/VoiceoverServices/Sectors'
import Realworld from '../components/ServicePages/VoiceoverServices/Realworld'
import Frequently from '../components/ServicePages/Translation/Frequently'
import Testimonial from '../components/ServicePages/VoiceoverServices/Testimonial'
import { ScrollRestoration } from 'react-router-dom'

const VoiceoverServices = () => {
  return (
    <div>
            <ScrollRestoration />
        <Hero />
        <OneVoice />
        <Sectors />
        <Realworld />
        <Frequently />
        <Testimonial />
    </div>
  )
}

export default VoiceoverServices