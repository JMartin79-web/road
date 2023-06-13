import React from 'react'

function Hero() {
  return (
    <>
    <div className='hero-container'>
    
    <main className='hero'>

      <section className='sec1'>
        
        <div className='sec1-img'>
          <img src="#" alt="hero img" />
        </div>

        <div className='sec1-txt'>
          <h1>Tea proyect</h1>
          <br />
          <p>Un sitio simple, con todo a mano.</p>
          <br />
          <br />
          
          <h4>De qué se trata</h4>
          <p>Esta es una página que recopila información.
            <br />
            Tiene el objetivo de ser simple y concisa, a diferencia de muchas otras páginas.
          </p>
          <br />  

          <h4>Qué vas a encontrar</h4>
          <p>
          Vas a encontrar infromación y documentación tanto de diseño, como programación, principalmente web y mobile.
          </p>

        </div>

        <div className='sec1-div2'>
          <p className='color1'>hola</p>
          <p className='color2'>hola</p>
          <p className='color3'>hola</p>
          <p className='color4'>hola</p>
        </div>

      </section>


    </main>
      
    </div>
    </>
  )
}

export default Hero