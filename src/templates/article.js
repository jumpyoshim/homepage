import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as _ from "../styles/article.module.scss"

const Article = props => {
  return (
    <>
      <div>
        <GatsbyImage
          image={
            props.data.markdownRemark.frontmatter.image.childImageSharp
              .gatsbyImageData
          }
          alt="article"
        />
      </div>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </>
  )
}

export default Article

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        excerpt
        id
        image {
          childImageSharp {
            gatsbyImageData(
              formats: AUTO
              quality: 90
              placeholder: BLURRED
              width: 1000
            )
          }
        }
        title
      }
      html
    }
  }
`
