import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" netlify-honeypot="bot-field" data-netlify="true">
        <input placeholder="Nombre..." type="text" name="name" />
        <input placeholder="Email..." type="email" name="email" />
        <textarea placeholder="Mensaje..." name="message" rows="5"></textarea>
        <Button text="Enviar mensaje" />
      </form>
    </ContactStyles>
  )
}

export default Contact
