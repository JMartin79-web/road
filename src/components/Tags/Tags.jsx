import React from 'react'
import { Link } from 'react-router-dom'

function Tags(props) {
  return (
    <div className='tag-container'>
    <Link className='tag-link' to={props.link}>
        <div className='tag'>
            <div className='tag-txt'>
                <h3> {props.title} </h3>
                <p>{props.p}</p>
            </div>

            <div className="tag-img">
                <img className='tag-img-img' src={props.img} alt="Img de tag" />
            </div>

        </div>
    </Link>
    </div>
  )
}

export default Tags