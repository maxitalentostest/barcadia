import * as React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"
import styled from "styled-components"

export const ButtonStyles = styled.button`
  color: #fff;
  background-color: transparent;
  font-family: "Heebo", sans-serif;
  border: 0;
  text-decoration: none;
  padding: 0;
  transition: color 0.3s ease;
  text-transform: capitalize;
  font-size: var(--p);
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 8px;
    background-color: var(--primary);
    transition: left 0.3s ease;
  }

  &:focus {
    color: var(--primary);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: var(--primary);

      &::after {
        left: 100%;
      }
    }
  }
`

const BannerModule = ({
  children,
  title,
  subTitle,
  price,
  enquire,
  fileUrl,
}) => {
  const download = (fileUrl) => {
    window.open(fileUrl, "_blank")
  }

  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../../static/main3.jpg"
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        )}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && <h2 className="price">${price}</h2>}
            {fileUrl && (
              <div className="banner__btns">
                <ButtonStyles onClick={() => download(fileUrl)}>
                  Descargar
                </ButtonStyles>
              </div>
            )}
          </div>
        </div>
        <div className="gradient"></div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
