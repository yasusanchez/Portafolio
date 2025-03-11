import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import { Skills } from './components/Technical-Skills/TechnicalSkills'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { HabilidadesTecnicas }


export const App = () => {
  return (
    <>
    <Header />
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Technical-Skills' element={<Skills />} />
        <Route path='/Social-Skills' element={<Social-Skills />} />
        <Route path='/Studies' element={<Studies/>} />
        <Route path='/Experience' element={<Experience />} />
      </Routes>
    </Container>
    </>
  )
}