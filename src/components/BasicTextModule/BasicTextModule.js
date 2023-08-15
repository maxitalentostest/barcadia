import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = ({ title, content, link, linkText, image }) => {
  return (
    <BasicTextModuleStyles className="section">
      <div className="container container__tight flex">
        <div className="text-part">
          {title && <h2>{title}</h2>}
          {content && <p style={{ marginBottom: "60px" }}>{content}</p>}

          <Button text={linkText} as={Link} to={link} />
        </div>
        {image && (
          <div className="image" style={{ width: "100%", borderRadius: "6px", border: "2px solid rgba(255, 255, 255, 0.15)" }}>
            {image}
          </div>
        )}
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
