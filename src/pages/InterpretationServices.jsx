import React from 'react'
import LanguagePair from '../components/ServicePages/Interpretation/LanguagePair'
import Expertise from '../components/ServicePages/Interpretation/Experties'
import Interpretation from '../components/ServicePages/Interpretation/Interpretation'
import Carts from '../components/ServicePages/Interpretation/Carts'
import Frequently from '../components/ServicePages/Translation/Frequently'
import { ScrollRestoration } from 'react-router-dom'

const InterpretationServices = () => {
  return (
    <div>
            <ScrollRestoration />
        <LanguagePair />
        <Expertise />
        <Carts />
        <Interpretation />
        <Frequently />
    </div>
  )
}

export default InterpretationServices