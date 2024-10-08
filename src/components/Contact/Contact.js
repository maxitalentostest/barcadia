import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input id="name" placeholder="Nombre..." type="text" name="name" />
        <input id="email" placeholder="Email..." type="email" name="email" />
        <textarea
          id="message"
          placeholder="Mensaje..."
          name="message"
          rows="5"
        ></textarea>
        <Button text="Enviar mensaje" />
      </form>
    </ContactStyles>
  )
}

export default Contact
