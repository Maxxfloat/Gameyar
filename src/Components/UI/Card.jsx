import React from 'react'

import './Card.module.scss'

const Card = (props) => {
  return (
    <div className='card__section'>
      {props.children}
    </div>
  )
}

export default Card;
