import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = ({ title, content, link, linkText, image }) => {
  return (
    <BasicTextModuleStyles className="section" style={{ background: "black" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ minWidth: "50%" }}>{image}</div>
        <div style={{ width: "100%" }} className="container container__tight">
          <div style={{ width: "90%", marginLeft: "10%" }}>
            {title && <h2>{title}</h2>}
            {content && <p style={{ marginBottom: "60px" }}>{content}</p>}
            <Button text={linkText} as={Link} to={link} />
          </div>
        </div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
