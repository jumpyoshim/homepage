import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as _ from "../styles/blog.module.scss"

const Blog = props => {
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <p>エンジニアの日常生活をお届けします</p>
        {props.data.allMarkdownRemark.edges.map((article, index) => (
          <div key={index}>
            <div>
              <h3>{article.node.frontmatter.title}</h3>
              <p>{article.node.frontmatter.excerpt}</p>
              <p>{article.node.frontmatter.date}</p>
              <Link to={article.node.fields.slug}>Read More</Link>
              <GatsbyImage
                image={
                  article.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
                alt="article"
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: frontmatter___id, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            excerpt
            id
            image {
              childImageSharp {
                gatsbyImageData(
                  formats: AUTO
                  placeholder: BLURRED
                  quality: 90
                )
              }
            }
            title
          }
        }
      }
    }
  }
`
