import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"
import { FcBusinessContact, FcStatistics } from "react-icons/fc"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="Recursos Humanos"
          content="Colaboramos en equipo con tu organización para fortalecer la administración del Capital Humano."
        >
          <div
            className="perks__titles"
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Share Tech Mono",
              fontWeight: 600,
              letterSpacing: "-2px",
              wordSpacing: "-8px",
              marginBottom: "16px",
            }}
          >
            <FcStatistics
              style={{
                width: "76px",
                height: "76px",
                padding: "0 10px 0 0",
              }}
            />
            Consultoría
          </div>
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="Enlace: candidato - empresa"
          content="Ayudamos a encontrar los candidatos idóneos para cubrir las vacantes dentro de su organización."
        >
          <div
            className="perks__titles"
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Share Tech Mono",
              fontWeight: 600,
              letterSpacing: "-2px",
              wordSpacing: "-8px",
              marginBottom: "16px",
            }}
          >
            <FcBusinessContact
              style={{
                width: "76px",
                height: "76px",
                padding: "0 10px 0 0",
              }}
            />
            Bolsa de Trabajo
          </div>
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
