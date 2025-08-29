import React from 'react'
import LanguagePair from '../components/ServicePages/Interpretation/LanguagePair'
import Expertise from '../components/ServicePages/Interpretation/Experties'
import Interpretation from '../components/ServicePages/Interpretation/Interpretation'
import Carts from '../components/ServicePages/Interpretation/Carts'
import { ScrollRestoration } from 'react-router-dom'
import Faqs from '../components/ServicePages/Interpretation/Faqs'

const InterpretationServices = () => {
  return (
    <div>
            <ScrollRestoration />
        <LanguagePair />
        <Expertise />
        {/* <Carts /> */}
        <Interpretation />
        <Faqs />
    </div>
  )
}

export default InterpretationServices