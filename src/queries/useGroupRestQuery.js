import { graphql, useStaticQuery } from "gatsby"

const useGrupoRestQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulRestaurantes(filter: {reservasDeGrupoONo: { eq: "Si" }}) {
        edges {
          node {
            nombre
          }
        }
      }
    }
  `)

  return data.allContentfulRestaurantes.edges
}

export default useGrupoRestQuery