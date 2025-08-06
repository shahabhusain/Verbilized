import React from 'react'
import LanguagePair from '../components/ServicePages/Interpretation/LanguagePair'
import Expertise from '../components/ServicePages/Interpretation/Experties'
import Interpretation from '../components/ServicePages/Interpretation/Interpretation'
import Carts from '../components/ServicePages/Interpretation/Carts'
import Frequently from '../components/ServicePages/Translation/Frequently'

const InterpretationServices = () => {
  return (
    <div>
        <LanguagePair />
        <Expertise />
        <Carts />
        <Interpretation />
        <Frequently />
    </div>
  )
}

export default InterpretationServices