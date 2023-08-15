import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BannerCTA from "../components/BannerCTA/BasicTextModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"
import { StaticImage } from "gatsby-plugin-image"

const Index = () => {
  return (
    <>
      <Seo title="Inicio" />
      <Layout>
        <BannerModule title="MaxiTalentos" subTitle="Consultoría en Recursos Humanos." />
        <BasicTextModule
          title="Nuestros Servicios"
          content="Somos una empresa dedicada a la consultoría de Recursos Humanos. Ofrecemos servicios con la finalidad de maximizar el talento de las personas y organizaciones."
          link="/servicios"
          linkText="Servicios"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features title="Blog." introduction="A continuación te presentamos los artículos más recientes de nuestro blog." />
        <BannerCTA
          title="Calculadora de Sueldo Neto"
          content="Usa está calculadora para determinar el sueldo neto que se paga de manera mensual, quincenal y semanal. Te permitirá conocer las deducciones del IMSS e ISR."
          link="/calculadora-de-sueldo-neto"
          linkText="Visitar"
          image={<StaticImage src="../../static/calc.jpg" alt="Banner Image" layout="fullWidth" placeholder="blurred" />}
        />
        <LatestPosts title="Autores" introduction="" />
      </Layout>
    </>
  )
}

export default Index
