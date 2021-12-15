import React from 'react'
import { Link } from "gatsby";

/* const paths = ["Restaurantes", "Grupo", "Contacto"]; */

const ContentXs = ({ onClick }) => {
  return (
    <div className="MenuXS__content__menuButtons">
      {/* {paths.map((value, i) => (
        <Link
          key={i}
          className="MenuXS__content__menuButtons--menuItem"
          to={`/${value.toLowerCase()}`}
          {...(onClick ? { onClick: () => onClick(`/${value.toLowerCase()}`) } : {})}
        >
          <h2>{value}</h2>
        </Link>
      ))} */}
      <Link
          className="MenuXS__content__menuButtons--menuItem"
          to={`/restaurantes`}
          {...(onClick ? { onClick: () => onClick(`/restaurantes`) } : {})}
        >
          <h2>Nuestros restaurantes</h2>
        </Link>
      <Link
          className="MenuXS__content__menuButtons--menuItem"
          to={`/nosotros`}
          {...(onClick ? { onClick: () => onClick(`/nosotros`) } : {})}
        >
          <h2>Nuestro Grupo</h2>
        </Link>
      <Link
          className="MenuXS__content__menuButtons--menuItem"
          to={`/contacto`}
          {...(onClick ? { onClick: () => onClick(`/contacto`) } : {})}
        >
          <h2>Contacto</h2>
        </Link>
    </div>
  )
}

export default ContentXs