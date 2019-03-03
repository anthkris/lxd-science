import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import AllTags from "../components/taglist"
import TagBackground from "../utils/tag-background"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import kebabCase from "lodash/kebabCase"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata.title
  const tagHeader = `${tag}`
  const posts = data.allMarkdownRemark.edges
  const ParagraphyStyle = {
      marginBottom: `0.6rem`
    }

  const PublicationStyle = {
    fontSize: `0.8rem`,
    color: `#0000008a`,
    fontWeight: `bold`
  }

  const LinkColor = {
    color: `#000000 !important`
  }

  const h2 = {
    fontFamily: `Montserrat,sans-serif`,
    textTransform: `capitalize`,
    fontSize: rhythm(1.7)
  }


  return (
      <Layout location="/tags" title={siteTitle}>
        <h2 style={h2}>{tagHeader}</h2>
        <SEO
          title="All posts"
          keywords={[`science`, `learning science`, `cognitive science`, `how people learn`]}
        />
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
              <p  style={ParagraphyStyle, PublicationStyle}>{node.frontmatter.publication}</p>
              <div style={{display: "flex", flexWrap: "wrap"}}>
                {tags.length > 0 ? tags.map((tag, index)=> {
                    let style = TagBackground(tag);
                    let tagHyphen = tag.replace(/' '/gi, '-')
                    return (<Link 
                              to={`/tags/${kebabCase(tagHyphen)}/`} 
                              key={index} 
                              style={LinkColor, style}>{tag}</Link>)
                  }) : null}
              </div>
            </div>
          )
        })}
      </Layout>
    )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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