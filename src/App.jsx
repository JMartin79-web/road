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
import Mobile from './components/Programacion/Mobile/Mobile'

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

            {/* mobile */}
            <Route path="/programacion/mobile" element={<Mobile/>} />

          {/* HOME */}
          <Route path="/" element={<Mobile/>} />

        </Routes>

        <Footer/>


      </BrowserRouter>
    </>
  )
}

export default App
