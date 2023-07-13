import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" data-netlify="true">
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
