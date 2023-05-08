import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Inicio" />
      <Layout>
        <BannerModule
          title="MaxiTalentos"
          subTitle="Consultoría en Recursos Humanos."
        />
        <BasicTextModule
          title="Nuestros Servicios"
          content="Somos una empresa dedicada a la consultoría de Recursos Humanos. Ofrecemos servicios con la finalidad de maximizar el talento de las personas y organizaciones."
          link="/servicios"
          linkText="Servicios"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Blog."
          introduction="A continuación te presentamos los artículos más recientes de nuestro blog."
        />
        <LatestPosts
          title="Autores"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
      </Layout>
    </>
  )
}

export default Index
