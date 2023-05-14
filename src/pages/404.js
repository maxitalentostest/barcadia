import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/SEO"
import Button from "../components/Button/Button"

const error = () => {
  return (
    <>
      <Seo title="Error" />
      <Layout>
        <div className="section">
          <div className="container container__tight">
            <h1>Lo sentimos.</h1>
            <h3>La página que esta buscando no existe.</h3>
            <p>
              Puede visitar otras páginas del sitio usando el menú de navegación
              o bien ir a la página de inicio dando clic en el siguiente botón.
            </p>
            <Button text="Ir al Inicio" to="/" as={Link} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default error
