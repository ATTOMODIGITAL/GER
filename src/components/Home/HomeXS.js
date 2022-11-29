import React from "react"
import MenuXS from "../Menu/MenuXS"
import {HiOutlineChevronDoubleDown} from "react-icons/hi"
import CardRestaurantXS from "../cardRestaurant/cardRestaurant"
import Footer from "../Footer/Footer"
import "./Home.scss"

const HomeXS = ({ restaurants, imgs, links }) => {

  return (
    <>
      <div className="HomeXS__imageContainer">
        <MenuXS />
        <HiOutlineChevronDoubleDown style={{paddingBottom:"1rem", fontSize:"3.5em"}} color={"#ffff"}/>
      </div>
      <div className="HomeXS__restaurantsContainer">
        <h1>Nuestros <br/> restaurantes</h1>
        {restaurants.map((rest,i) => <CardRestaurantXS data={rest} link={links[i]}/>)}
      </div>
      <Footer/>

      {/* <div className="HomeXS--imgsContainer">

        <Link to={`restaurantes/${links[2]}`} className="HomeXS--imgsContainer--link">
          <GatsbyImage
            image={getImage(imgs[2])}
            alt=""
            className="HomeXS--imgsContainer--link--img"
          />
        </Link>

        <Link to={`restaurantes/${links[1]}`} className="HomeXS--imgsContainer--link">
          <GatsbyImage
            image={getImage(imgs[1])}
            alt=""
            className="HomeXS--imgsContainer--link--img"
          />
        </Link>

        <Link to={`restaurantes/${links[3]}`} className="HomeXS--imgsContainer--link">
          <GatsbyImage
            image={getImage(imgs[3])}
            alt=""
            className="HomeXS--imgsContainer--link--img"
          />
        </Link>

        <Link to={`restaurantes/${links[0]}`} className="HomeXS--imgsContainer--link">
          <GatsbyImage
            image={getImage(imgs[0])}
            alt=""
            className="HomeXS--imgsContainer--link--img"
          />
        </Link>

      </div> */}
    </>
  )
}

export default HomeXS
