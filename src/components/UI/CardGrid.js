import React from 'react'
import "./card.scss"


const CardGrid = () => {

const classes = 'card-grid ' + props.className;

  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

export default CardGrid