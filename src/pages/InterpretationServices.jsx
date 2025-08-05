import React from 'react'
import Translation from '../components/ServicePages/Translation/Translation'
import Trusted from '../components/ServicePages/Translation/Trusted'
import Carts from '../components/ServicePages/Translation/Carts'
import Translator from '../components/ServicePages/Translation/Translator'
import Frequently from '../components/ServicePages/Translation/Frequently'

const InterpretationServices = () => {
  return (
    <div>
        <Translation />
        <Trusted />
        <Carts />
        <Translator />
        <Frequently />
    </div>
  )
}

export default InterpretationServices