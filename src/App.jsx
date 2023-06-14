import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

// Paginas
import Home from './components/Home/Home'
import Programacion from './components/Programacion/Programacion'
//programacion
import Html from './components/Programacion/HtmlCss/Html'
import Css from "./components/Programacion/HtmlCss/Css"
import Javascript from './components/Programacion/Js/Javascript'
import Mobile from './components/Programacion/Mobile/Mobile'
import ReactJs from './components/Programacion/ReactJs/ReactJs'

function App() {

  return (
    <>
      <BrowserRouter>


        <Header/>

        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home/>} />

          {/* PROGRAMACION */}
          <Route path="/programacion" element={<Programacion/>} />

            {/* html */}
            <Route path="/programacion/html" element={<Html/>} />

            {/* css */}
            <Route path="/programacion/css" element={<Css/>} />

            {/* js */}
            <Route path="/programacion/javascript" element={<Javascript/>} />

            {/* react */}
            <Route path="/programacion/react" element={<ReactJs/>} />

            {/* mobile */}
            <Route path="/programacion/mobile" element={<Mobile/>} />



        </Routes>

        <Footer/>


      </BrowserRouter>
    </>
  )
}

export default App
