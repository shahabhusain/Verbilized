import React from 'react'
import LanguagePair from '../components/ServicePages/LanguagePairs/LanguagePair'
import Expertise from '../components/ServicePages/LanguagePairs/Experties'
import Interpretation from '../components/ServicePages/LanguagePairs/Interpretation'
import Carts from '../components/ServicePages/LanguagePairs/Carts'
import Frequently from '../components/ServicePages/Translation/Frequently'

const LanguagePairs = () => {
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

export default LanguagePairs