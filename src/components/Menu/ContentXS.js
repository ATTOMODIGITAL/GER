import React from 'react'
import { Link } from "gatsby";

const paths = ["Restaurantes", "El Grupo", "Contacto"];

const ContentXs = ({ onClick }) => {
  return (
    <div className="MenuXS__content__menuButtons">
      {paths.map((value, i) => (
        <Link
          key={i}
          className="MenuXS__content__menuButtons--menuItem"
          to={`/${value.toLowerCase()}`}
          {...(onClick ? { onClick: () => onClick(`/${value.toLowerCase()}`) } : {})}
        >
          <h2>{value}</h2>
        </Link>
      ))}
    </div>
  )
}

export default ContentXs