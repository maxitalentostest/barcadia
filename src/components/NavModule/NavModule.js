import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import MenuContext from "../MenuContext"
import { motion } from "framer-motion"
import { menuItems } from "./NavConstants"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import useFeaturedProduct from "../../hooks/use-featured-product"
import { FiChevronDown as Chevron } from "react-icons/fi"
import {
  NavModuleStyles,
  NavTopLevel,
  SubNavStyles,
  HamburgerStyles,
  LogoStyles,
} from "./NavModuleStyles"
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
  subMenuNavVariants,
} from "./NavAnim"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StyledImg = styled.img``

const NavModule = () => {
  const featuredProduct = useFeaturedProduct()

  const [isOpen, setNav] = useContext(MenuContext)
  const [subNavIsOpen, setSubNav] = useState(false)

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  const toggleSubNav = () => {
    setSubNav((subNavIsOpen) => !subNavIsOpen)
  }

  const { title } = UseSiteMetadata()

  return (
    <NavModuleStyles>
      <div className="nav">
        <div className="container">
          <HamburgerStyles
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={toggleNav}
            onKeyDown={toggleNav}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={isOpen ? " open" : ""}
          >
            <motion.span
              className="bar"
              variants={barOneVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barTwoVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barThreeVariants}
            ></motion.span>
          </HamburgerStyles>

          {title && (
            <LogoStyles>
              <Link to="/">
                {/* {title}
                <span>.</span> */}

                {/* <StyledImg src="/logo.svg" /> */}
                <div
                  style={{
                    width: "220px",
                    height: "100px",
                    fontFamily: "Share Tech Mono",
                    fontSize: "17px",
                  }}
                >
                  {/* <StaticImage src="../logo.svg" /> */}
                  <svg width="100%" height="100%" viewBox="0 0 110 50">
                    <line
                      x1="43"
                      y1="2"
                      x2="43"
                      y2="12"
                      style={{ stroke: "#6fdde0", strokeWidth: "0.6" }}
                    />
                    <line
                      x1="43"
                      y1="38"
                      x2="43"
                      y2="48"
                      style={{ stroke: "#6fdde0", strokeWidth: "0.6" }}
                    />
                    <line
                      x1="43"
                      y1="48"
                      x2="73"
                      y2="48"
                      style={{ stroke: "#6fdde0", strokeWidth: "0.6" }}
                    />
                    <line
                      x1="43"
                      y1="2"
                      x2="73"
                      y2="2"
                      style={{ stroke: "#6fdde0", strokeWidth: "0.6" }}
                    />
                    <line
                      x1="73"
                      y1="2"
                      x2="73"
                      y2="12"
                      style={{ stroke: "#6fdde0", strokeWidth: "0.6" }}
                    />
                    <line
                      x1="73"
                      y1="38"
                      x2="73"
                      y2="48"
                      style={{ stroke: "#6fdde0", strokeWidth: "0.6" }}
                    />
                    <text
                      font-family="Share Tech Mono"
                      x="4"
                      y="30"
                      fill="#fff"
                    >
                      MaxiTalentos
                    </text>
                  </svg>
                </div>
              </Link>
            </LogoStyles>
          )}
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <NavTopLevel>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={toggleNav}
                onKeyDown={toggleNav}
                to={item.path}
                activeClassName="menu__item--active"
              >
                {item.text}
                <span>.</span>
              </Link>
            </li>
          ))}
          {featuredProduct && (
            <li className={subNavIsOpen ? "open" : "closed"}>
              <button
                type="button"
                onClick={toggleSubNav}
                onKeyDown={toggleSubNav}
              >
                Products<span>.</span>
                <Chevron />
              </button>

              <SubNavStyles
                initial="closed"
                animate={subNavIsOpen ? "open" : "closed"}
                variants={subMenuNavVariants}
              >
                <li>
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    to="/products"
                  >
                    All Products<span>.</span>
                  </Link>
                </li>
                <hr />
                {featuredProduct.map((item, index) => {
                  const { gatsbyPath, title } = item
                  return (
                    <li key={index}>
                      <Link
                        onClick={toggleNav}
                        onKeyDown={toggleNav}
                        to={gatsbyPath}
                      >
                        {title}
                        <span>.</span>
                      </Link>
                    </li>
                  )
                })}
              </SubNavStyles>
            </li>
          )}
        </NavTopLevel>
      </motion.div>
    </NavModuleStyles>
  )
}

export default NavModule
