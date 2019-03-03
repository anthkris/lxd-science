import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllTags from "../components/taglist"
import { rhythm } from "../utils/typography"
import TagBackground from "../utils/tag-background"

class BlogIndex extends React.Component {

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const ParagraphyStyle = {
      marginBottom: `1rem`
    }

    const PublicationStyle = {
      fontSize: `0.7rem`,
      color: `#0000008a`,
      fontWeight: `bold`
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`science`, `learning science`, `cognitive science`, `how people learn`]}
        />
        <AllTags data={data}/>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const tags = node.frontmatter.tags
          console.log(tags)
          return (
            <div key={node.fields.slug}>
              <a 
                style={{ boxShadow: `none`, color: `#111111` }} 
                href={node.frontmatter.url} 
                target="_blank"
                rel="noopener noreferrer">
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  {title}
                </h3>
                <p
                  style={ParagraphyStyle}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </a>
              <p style={ParagraphyStyle, PublicationStyle}>{node.frontmatter.publication}</p>
              <div style={{display: "flex", flexWrap: "wrap"}}>
                {tags.length > 0 ? tags.map((tag, index)=> {
                    let style = TagBackground(tag);
                    return (<span key={index} style={style}>{tag}</span>)
                  }) : null}
              </div>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            url
            publication
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
