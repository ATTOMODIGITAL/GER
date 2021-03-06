import { graphql, useStaticQuery } from "gatsby"

const UseGrupoQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulElGrupo {
        edges {
          node {
            seoMetaDescription {
              seoMetaDescription
            }
            seoTitle
            titulo
            subtitulo
            texto {
              raw
            }
            imagen {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  `)

  return data.allContentfulElGrupo.edges[0].node
}

export default UseGrupoQuery
