import React from 'react'
import './Card.scss'
const Card = ({rasm,ism,p}) => {
  return (
    <div className="card">
            <img src={rasm} alt="" />
            <h3>{ism}</h3>
            <p>{p}</p>
        </div>
  )
}

export default Card