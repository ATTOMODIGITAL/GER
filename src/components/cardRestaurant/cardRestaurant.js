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
                <CarouselDots images={data.node.mobileListadoImgs} name={""} link={link}/>
            </div>
            <ButtonsHomeXS
                booking={data.node.reservarLinkONo}
                menu={data.node.carta}
              />
        </div>
    )
}

export default CardRestaurantXS;