import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"
import useAllResource from "../../hooks/use-all-resource"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import { FaFacebookSquare as Facebook, FaTwitterSquare as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin } from "react-icons/fa"

const Footer = () => {
  const allResource = useAllResource()
  const siteMeta = UseSiteMetadata()
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h5>Secciones</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>
        {allResource.length > 0 && (
          <FooterMenuStyles className="footer__menu products__menu">
            <h5>
              <Link to="/recursos">
                Recursos<span>.</span>
              </Link>
            </h5>
            <ul>
              {allResource.map((item, index) => {
                const { gatsbyPath, title } = item

                return (
                  <li key={index}>
                    <Link to={gatsbyPath}>
                      {title}
                      <span>.</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </FooterMenuStyles>
        )}

        {siteMeta.twitterUsername || siteMeta.facebookUsername || siteMeta.instagramUsername || siteMeta.linkedinUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              Síguenos<span>.</span>
            </h5>
            <ul>
              {siteMeta.twitterUsername && (
                <li>
                  <a href={`https://www.twitter.com/${siteMeta.twitterUsername}`} target="_blank" rel="nofollow noreferrer noopener">
                    <Twitter />
                  </a>
                </li>
              )}
              {siteMeta.facebookUsername && (
                <li>
                  <a href={`https://www.facebook.com/profile.php?id=100093533521048`} target="_blank" rel="nofollow noreferrer noopener">
                    <Facebook />
                  </a>
                </li>
              )}
              {siteMeta.instagramUsername && (
                <li>
                  <a href={`https://www.instagram.com/${siteMeta.instagramUsername}`} target="_blank" rel="nofollow noreferrer noopener">
                    <Instagram />
                  </a>
                </li>
              )}
              {siteMeta.linkedinUsername && (
                <li>
                  <a href={`https://mx.linkedin.com/company/maxitalentos-mx`} target="_blank" rel="nofollow noreferrer noopener">
                    <Linkedin />
                  </a>
                </li>
              )}
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      <div className="flex">
        <CopyrightStyles>
          <div className="container container__tight">
            <p>
              Desarrollado por{" "}
              <a href="https://www.linkedin.com/in/jose-a-mendez-hdz/" target="_blank" rel="noopener noreferrer">
                Jose Mendez
              </a>
              <span>.</span>
            </p>
          </div>
        </CopyrightStyles>
        <CopyrightStyles>
          <div className="container container__tight">
            <p>
              Theme by{" "}
              <a href="https://www.morganbaker.dev/" target="_blank" rel="noopener noreferrer">
                Morgan Baker Development
              </a>
              <span>.</span>
            </p>
          </div>
        </CopyrightStyles>
      </div>
    </FooterStyles>
  )
}

export default Footer
