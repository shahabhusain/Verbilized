import React from 'react'
import {Route, createRoutesFromElements, createBrowserRouter} from 'react-router-dom'
import InterpretationServices from '../pages/InterpretationServices'
import LanguagePairs from '../pages/LanguagePairs'
import LocalizationServices from '../pages/LocalizationServices'
import VoiceoverServices from '../pages/VoiceoverServices'
import Home from '../pages/Home'
import Layout from '../components/Layout/Layout'
import Layouts from '../components/Layout/Layouts'
import TranslationalServices from '../pages/TranslationServices'
import GetAQuote from '../pages/GetAQuote'

export const router = createBrowserRouter (
    createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path='/services' element={<Layouts />}>
        <Route index element={<TranslationalServices />} />
        <Route path='/services/interpretation' element={<InterpretationServices />} />
        <Route path='/services/language' element={<LanguagePairs />} />
        <Route path='/services/voiceover' element={<VoiceoverServices />} />
        <Route path='/services/localize' element={<LocalizationServices />} />
        <Route path='/services/getaquote' element={<GetAQuote />} />
    </Route>
    </>
  )
)