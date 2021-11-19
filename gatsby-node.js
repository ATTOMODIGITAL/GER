const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const restaurantTemplate = path.resolve('src/templates/restaurante.js')
  const resRestaurantes = await graphql(`
    query {
      allContentfulRestaurantes {
        edges {
          node {
            url
          }
        }
      }
    }
  `)
  resRestaurantes.data.allContentfulRestaurantes.edges.forEach((edge) => {
    createPage ({
      path: `/restaurantes/${edge.node.url}`,
      component: restaurantTemplate,
      context: {
        slug: edge.node.url
      }
    })
  })
}