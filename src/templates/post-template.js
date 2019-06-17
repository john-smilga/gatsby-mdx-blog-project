import React from "react"
import styles from "../css/postTemplate.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
import Image from "gatsby-image"

const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx.code
  const img = image.childImageSharp.fluid
  console.log(body)

  return (
    <section className={styles.template}>
      <Link to="/" className={styles.link}>
        back to all posts
      </Link>
      <div className={styles.info}>
        <h1>{title}</h1>
        <h4>
          <span>by {author}</span> / <span>{date}</span>
        </h4>
      </div>
      <Image fluid={img} />
      <div className={styles.content}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </section>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`

export default PostTemplate