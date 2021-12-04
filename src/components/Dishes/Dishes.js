import React from 'react'

import CarouselSimple from '../Carousel/CarouselSimple'
import "./Dishes.scss"

const Dishes = ({images, name}) => {
  console.log(images)
  return (
    <div className="Dishes">
      <h2>Gatronomía / Nuestros platos</h2>
      <h6>{name}</h6>
      <CarouselSimple images={images}/>
    </div>
  )
}

export default Dishes
