import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useLocation } from '@reach/router';
import HamburgerMenu from "react-hamburger-menu"

import useLogoQuery from "../../queries/useLogoQuery"
import Footer from "../Footer/Footer"
import ContentXs from "./ContentXS"
import GoBack from "../GoBack/GoBrack"

const MenuXS = () => {
  const [openHam, setOpenHam] = useState(false)
  const data = useLogoQuery()
  const location = useLocation();

  const handleHamClick = () => {
    setTimeout(() => {
      setOpenHam(!openHam)
    }, 100)
  }

  const handleLinkClick = (pathname) => {
    if (pathname === window.location.pathname) {
      setOpenHam(false)
    }
  }

  useEffect(() => {
    const htmlNode = document.querySelector("html")
    if (openHam) {
      htmlNode.style.overflow = "hidden"
    } else {
      htmlNode.style.overflow = null
    }

    return () => {
      htmlNode.style.overflow = null
    }
  }, [openHam])

  return (
    <>
      <div className="MenuXS__header--background"></div>
      <div className="MenuXS__header--blankInShadow"></div>

      <div className="MenuXS__header--bar">
        <HamburgerMenu
          isOpen={openHam}
          menuClicked={() => handleHamClick()}
          color="#303546"
          width={27}
          height={16}
          strokeWidth={1}
          animationDuration={0.6}
          className="MenuXS__header--hamburger"
        />
        
        <Link to="/" className="MenuXS__header--bar__brand">
          <GatsbyImage
            image={getImage(data.logo)}
            alt="GER"
            className="MenuXS__header__brand--logoImg"
          />
        </Link>
        
        <div style={{ width: 27, color: "#fff" }}>
        {
          location.pathname.startsWith('/restaurantes/') 
          || location.pathname.startsWith('/aviso-') 
          || location.pathname.startsWith('/priv') 
          || location.pathname.startsWith('/cooki') 
          || location.pathname.startsWith('/reserv') 
          ? <GoBack /> : "pp"
        }
        </div>
      </div>

      {openHam && (
        <>
          <div className="MenuXS__content">
            <ContentXs onClick={handleLinkClick} />
            <Footer />
          </div>
        </>
      )}
    </>
  )
}

export default MenuXS
