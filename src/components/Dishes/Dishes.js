import React from 'react'

import CarouselSimple from '../Carousel/CarouselSimple'
import "./Dishes.scss"

const Dishes = ({images, name}) => {
  console.log(images)
  return (
    <div className="Dishes">
      <h2>Nuestros platos</h2>
      <h6 style={{marginBottom: 10}}>{name}</h6>
      <CarouselSimple images={images}/>
    </div>
  )
}

export default Dishes
