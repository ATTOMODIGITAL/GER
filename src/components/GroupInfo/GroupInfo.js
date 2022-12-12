import { Link } from "gatsby"
import React from "react"
import Text from "../Text/Text"
import "./GroupInfo.scss"

const GroupInfo = ({ group, menu, name, grupoDescripcion }) => {
  const hasGroup = () => {
    if (group.toLowerCase() === "no") {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      {hasGroup() && (
        <div className="GrupoInfo">
          <h4>Eventos para grupos {name}</h4>
          <Text text={grupoDescripcion}/>
          <div className="GrupoInfo__buttons">
            {
              menu && 
                <a
                href={`${menu?.file?.url}`}
                target="_blank"
                rel="noreferrer"
              >
                Carta
              </a>
            }
            <Link
              to={`/reservas-grupos?restaurante=${name}`}
            >
              Reservar
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default GroupInfo
