import React from "react"
import ButtonsHomeXS from "../ButtonsHomeXS/buttonsHomeXS"
import CarouselDots from "../Carousel/CarouselDots"
//import CarouselSimple from "../Carousel/CarouselSimple"
import './cardRestaurant..scss'


const CardRestaurantXS = ({data, link}) => {

    return (
        <div className="cardRestaurantXS">
            <h1 className="cardRestaurantXS__title">{data.node.nombre.toUpperCase()}</h1>
            <div className="cardRestaurantXS__images">
                <CarouselDots images={data.node.mobileListadoImg} name={""} link={link}/>
            </div>
            <ButtonsHomeXS
                booking={data.node.reservar}
                menu={data.node.carta}
                name={data.node.nombre.toUpperCase()}
                restaurantLink={data.node.url}
              />
        </div>
    )
}

export default CardRestaurantXS;