import * as React from "react"
import { Link } from "gatsby"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/jumpyoshim/homepage">
          <img src={github} alt="logo"></img>
        </a>
        <a href="https://linkedin.com/in/saka2j">
          <img src={linkedin} alt="logo"></img>
        </a>
        <a href="https://twitter.com/jumpyoshim">
          <img src={twitter} alt="logo"></img>
        </a>
        <hr />
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <p>©{new Date().getFullYear()} Jumpei Sakatsu</p>
      </div>
    </footer>
  )
}

export default Footer
