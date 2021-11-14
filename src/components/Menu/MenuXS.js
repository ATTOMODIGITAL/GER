import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import HamburgerMenu from "react-hamburger-menu"

import Footer from "../Footer/Footer";
import ContentXs from "./ContentXS";
/* 
const useLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLogo {
        edges {
          node {
            logo {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
        }
      }
    }
  `)

  return data.allContentfulLogo.edges[0].node
} */

const MenuXS = () => {
  const [openHam, setOpenHam] = useState(false)
  // const data = useLogo()

  const handleHamClick = () => {
    setTimeout(() => {
      setOpenHam(!openHam)
    }, 100)
  }

  const handleLinkClick = pathname => {
    const pathnames = [pathname, `${pathname}/`]
    if (pathnames.some(path => path === window.location.pathname)) {
      setOpenHam(false)
    }
  }
  return (
    <>
      <div className="MenuXS__header">
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

      {/*   <Link to="/" className="MenuXS__header__brand">
          <GatsbyImage image={getImage(data.logo)} alt="Estudio" className="MenuXS__header__brand--logoImg" />
        </Link> */}

        <div style={{ width: 27, color: "#fff" }}>hj</div>
      </div>

      {openHam && (
        <>
          <div className="MenuXS__content">
            <ContentXs onClick={handleLinkClick}/>
            <Footer />
          </div>
        </>
      )}
    </>
  )
}

export default MenuXS
