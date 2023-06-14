import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
<>
<div className='header-container'>
    <header className='header'>

        <div>
          <Link to="/">Tea proyect</Link>
        </div>
      
        <div>
          <a href="#">Links</a>
        </div>  


        {/* RESPONSIVE - MENU HAMBURGUESA */}

      
    </header>

</div>
</>
  )
}

export default Header