import React from 'react'
import Hero from '../components/ServicePages/LocalizationServices/Hero'
import Localized from '../components/ServicePages/LocalizationServices/Localized'
import Sectors from '../components/ServicePages/VoiceoverServices/Sectors'
import OneVoice from '../components/ServicePages/LocalizationServices/OneVoice'
import Frequently from '../components/ServicePages/Translation/Frequently'
import { ScrollRestoration } from 'react-router-dom'
import Covered from '../components/ServicePages/LocalizationServices/Covered'

const LocalizationServices = () => {
  return (
    <div>
        <ScrollRestoration />
        <Hero />
        <Localized />
        <Sectors />
        <OneVoice />
        <Covered />
    </div>
  )
}

export default LocalizationServices