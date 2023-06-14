import React from 'react'
import Tags from '../../Tags/Tags'

//import imgs
import imgHtml from "../../../assets/Img/tags/tags_html.png"
import imgCss from "../../../assets/Img/tags/tags_css.png"
import imgJs from "../../../assets/Img/tags/tags_js.png"
import imgReact from "../../../assets/Img/tags/tags_react_js.png"
import imgReactNative from "../../../assets/Img/tags/tags_react_native.png"

function Tab1() {
return (
<>

<div className='tabs'>
    
    <Tags
        link="/programacion/html"
        img={imgHtml}
        title="HTML"
        p="Lenguaje que se utiliza para estructurar y desplegar una página web y sus contenidos. El esqueleto de todo lo web"
    />
    
    <Tags
        link="/programacion/css"
        img={imgCss}
        title="CSS"
        p="Lenguaje que maneja el diseño y presentación de las páginas web"
    />
    
    <Tags
        link="/programacion/html"
        img={imgJs}
        title="Javascript"
        p="Lenguaje de programación que se usa en desarrollo web, y otros ámbitos"
    />    

    <Tags
        link="/programacion/html"
        img={imgReact}
        title="React JS"
        p="Usando una biblioteca que permite crear interfaces de usuario a partir de piezas individuales llamadas componentes."
    />
    
    <Tags
        link="/programacion/mobile"
        img={imgReactNative}
        title="React Native"
        p="Usando React para el desarrollo de apps cross plataform"
    />

</div>

</>
)
}

export default Tab1