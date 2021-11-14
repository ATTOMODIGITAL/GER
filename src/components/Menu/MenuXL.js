import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/* const useLogo = () => {
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

const Menu = () => {
  // const data = useLogo()

  return (
    <>
      <div className="MenuXL__brand">
      {/* <Link className="MenuXL__brand__container" to="/">
          <GatsbyImage image={getImage(data.logo)} alt="Estudio" className="MenuXL__brand__container--logoImg"/>
        </Link> */}
      </div>

      <div className="MenuXL__content">
        <Link
          partiallyActive={true}
          className="MenuXL__content--navlink"
          activeClassName="MenuXL__content--active"
          to="/restaurantes"
        >
          Restaurantes
        </Link>

        <Link
          className="MenuXL__content--navlink"
          activeClassName="MenuXL__content--active"
          to="/grupo"
        >
          El Grupo
        </Link>

        <Link
          partiallyActive={true}
          className="MenuXL__content--navlink"
          activeClassName="MenuXL__content--active"
          to="/contacto"
        >
          Contacto
        </Link>
      </div>
    </>
  )
}

export default Menu
