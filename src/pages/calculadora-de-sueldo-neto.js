import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../components/Contact/Contact"
import CalculadoraSalarioNeto from "../components/CalculadoraSalarioNeto/CalculadoraSalarioNeto"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const Calculadora = () => {
  return (
    <>
      <Seo title="Calculadora de Sueldo Neto" />
      <Layout>
        <SimpleBanner
          title="Calculadora de Sueldo Neto"
          subtitle="Usa está calculadora para determinar el sueldo neto que se paga de manera mensual, quincenal y semanal. Te permitirá conocer las deducciones del IMSS e ISR."
        >
          <StaticImage className="banner__image" src="../../static/sueldo-neto-calculadora.jpg" alt="Calculadora sueldo neto" />
        </SimpleBanner>
        <CalculadoraSalarioNeto />
      </Layout>
    </>
  )
}

export default Calculadora
