/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import TagBackground from "../utils/tag-background"

const TagStyle = {
  display: `flex`,
  justifyContent: `center`,
  flexWrap: `wrap`,
  listStyle: `none`,
  margin: `0`
  
}

const LinkStyle = {
  textDecoration: `none`,
  color: `#000`,
  boxShadow: `none`,
}

const AllTags = ({
    data: {
      allMarkdownRemark: { group },
    },
  }) => {
  console.log(group)
  if (group) {
    return (
      <div>
        <ul style={TagStyle}>
          {group.map(tag => (
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={LinkStyle} key={tag.fieldValue}>
              <li style={TagBackground(tag.fieldValue)}>
                {tag.fieldValue}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllTags
