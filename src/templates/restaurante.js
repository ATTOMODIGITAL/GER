import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import useWindowSize from "../hooks/useWindowSize"
import useViewport from "../hooks/useViewport"
import ButtonsCTAs from "../components/ButtonsCTAs/ButtonsCTAs"
import InfoRest from "../components/InfoRest/InfoRest"
import InfoRestXS from "../components/InfoRest/InfoRestXS"
import GroupImgs from "../components/GroupImgs/GroupImgs"
import Text from "../components/Text/Text"
import Dishes from "../components/Dishes/Dishes"
import GroupInfo from "../components/GroupInfo/GroupInfo"
import GoBack from "../components/GoBack/GoBrack"
import { IoLogoInstagram } from "react-icons/io"
import { FaTripadvisor } from "react-icons/fa"

export const query = graphql`
  query ($slug: String!) {
    contentfulRestaurantes(url: { eq: $slug }) {
      seoTitle
      seoMetaDescription {
        seoMetaDescription
      }
      nombre
      categoria
      direccionLinea1
      direccionLinea2
      direccionLinea3
      horarioLinea1
      horarioLinea2
      trpadvisorLink
      instagramLink
      reservarLinkONo
      reservasDeGrupoONo
      grupoDescripcion {
        raw
      }
      carta {
        file {
          url
        }
      }
      cartaGrupo {
        file {
          url
        }
      }
      texto {
        raw
      }
      mobileDetalleImgs {
        gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
      }
      desktopDetalleImgs {
        gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
      }
      platosImgs {
        gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
      }
    }
  }
`

const Restaurante = props => {
  const size = useWindowSize()
  useViewport()

  return (
    <Layout>
      <Seo
        title={props.data.contentfulRestaurantes.nombre}
        lang="es"
        titleSEO={props.data.contentfulRestaurantes.seoTitle}
        description={props.data.contentfulRestaurantes.seoMetaDescription}
      />

      <div className="">
        {size > 880 ? (
          <>
            <GoBack />
            <div className="Main__titles">
              <h1>{props.data.contentfulRestaurantes.nombre}</h1>
              <h6>{props.data.contentfulRestaurantes.categoria}</h6>
            </div>

            <div className="Main__element">
              <ButtonsCTAs
                booking={props.data.contentfulRestaurantes.reservarLinkONo}
                menu={props.data.contentfulRestaurantes.carta}
                extraClassname={true}
              />
            </div>

            <InfoRest
              dir1={props.data.contentfulRestaurantes.direccionLinea1}
              dir2={props.data.contentfulRestaurantes.direccionLinea2}
              dir3={props.data.contentfulRestaurantes.direccionLinea3}
              time1={props.data.contentfulRestaurantes.horarioLinea1}
              time2={props.data.contentfulRestaurantes.horarioLinea2}
              linkIG={props.data.contentfulRestaurantes.instagramLink}
              linkTrip={props.data.contentfulRestaurantes.trpadvisorLink}
            />

            <GroupImgs
              imgs={props.data.contentfulRestaurantes.desktopDetalleImgs}
            />

            <Text text={props.data.contentfulRestaurantes.texto} />

            <Dishes
              images={props.data.contentfulRestaurantes.platosImgs}
              name={props.data.contentfulRestaurantes.nombre}
            />

            <GroupInfo
              group={props.data.contentfulRestaurantes.reservasDeGrupoONo}
              grupoDescripcion={
                props.data.contentfulRestaurantes.grupoDescripcion
              }
              menu={props.data.contentfulRestaurantes.cartaGrupo}
              name={props.data.contentfulRestaurantes.nombre}
            />
          </>
        ) : (
          <>
            <div className="Main__titles">
              <h1>{props.data.contentfulRestaurantes.nombre}</h1>
              <h6>{props.data.contentfulRestaurantes.categoria}</h6>
            </div>

            <InfoRestXS
              dir1={props.data.contentfulRestaurantes.direccionLinea1}
              dir2={props.data.contentfulRestaurantes.direccionLinea2}
              time1={props.data.contentfulRestaurantes.horarioLinea1}
              time2={props.data.contentfulRestaurantes.horarioLinea2}
            />

            <div className="">
              <ButtonsCTAs
                booking={props.data.contentfulRestaurantes.reservarLinkONo}
                menu={props.data.contentfulRestaurantes.carta}
                extraClassname={true}
              />
            </div>

            <GroupImgs
              imgs={props.data.contentfulRestaurantes.mobileDetalleImgs}
            />

            <Text text={props.data.contentfulRestaurantes.texto} />

            <Dishes
              images={props.data.contentfulRestaurantes.platosImgs}
              name={props.data.contentfulRestaurantes.nombre}
            />

            <GroupInfo
              group={props.data.contentfulRestaurantes.reservasDeGrupoONo}
              name={props.data.contentfulRestaurantes.nombre}
              menu={props.data.contentfulRestaurantes.cartaGrupo}
              grupoDescripcion={
                props.data.contentfulRestaurantes.grupoDescripcion
              }
            />

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a
                href={props.data.contentfulRestaurantes.instagramLink}
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: 15 }}
              >
                <IoLogoInstagram fontSize="2.3em" color="#47535B" />
              </a>
              <a
                href={props.data.contentfulRestaurantes.trpadvisorLink}
                target="_blank"
                rel="noreferrer"
              >
                <FaTripadvisor fontSize="2.3em" color="#47535B" />
              </a>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Restaurante
