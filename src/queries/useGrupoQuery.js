import { graphql, useStaticQuery } from "gatsby"

const UseGrupoQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNuestroGrupo {
        edges {
          node {
            seoTitle
            seoMetaDescription
            ttulo
            subttulo
            descripcionEmpresa {
              raw
            }
            imagenEmpresa {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  `)

  return data.allContentfulNuestroGrupo.edges[0].node
}

export default UseGrupoQuery
