import React from 'react'

import CarouselSimple from '../Carousel/CarouselSimple'
import "./Dishes.scss"

const Dishes = ({ images, name }) => {
  return (
    <div className="Dishes">
      <h4 style={{marginBottom: 20, marginTop: 25}}>Nuestros platos</h4>
      <CarouselSimple images={images} name={name}/>
    </div>
  )
}

export default Dishes
