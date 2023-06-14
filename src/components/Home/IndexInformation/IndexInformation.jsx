import React, { useState } from 'react'

//
import Tab1 from "./Tab1"
import Tab2 from "./Tab2"
import Tab3 from "./Tab3"

function IndexInformation() {

    const [index, setIndex] = useState(1)

    const handleIndex =  (index) => {
        setIndex(index)
      }
return (

<>
<div className='index-info-container'>

    <section className='index-info'>
    
        <div className='index-tabs'>

            <div className={index === 1 ?'index-tab-open' : 'index-tab'} onClick={()=>{handleIndex(1)}}>
                <p className='tab-txt'>Programación</p>
            </div>
            
            <div className={index === 2 ?'index-tab-open' : 'index-tab'} onClick={()=>{handleIndex(2)}}>
                <p className='tab-txt'>Diseño</p>
            </div>
            
            <div className={index === 3 ?'index-tab-open' : 'index-tab'} onClick={()=>{handleIndex(3)}}>
                <p className='tab-txt'>Extras</p>
            </div>
            
        </div>

        <div className='index-content'>
            {index === 1 && <Tab1/>}
            {index === 2 && <Tab2/>}
            {index === 3 && <Tab3/>}
        </div>

    </section>

</div>

</>

)
}

export default IndexInformation