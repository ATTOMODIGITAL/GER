import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"
import "../components/layout.scss"

const IndexPage = () => (
  <div>
    <Seo
      title="Home"
      lang="es"
      description="page description"
      meta="metatilte"
    />
    <Link to="restaurantes">Start</Link>
  </div>
)

export default IndexPage
