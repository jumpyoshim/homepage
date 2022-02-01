import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <StaticImage
            src="../images/logo.png"
            alt="logo"
            quality={90}
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
            width={50}
          />
        </Link>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
