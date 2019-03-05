import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class About extends React.Component {

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const CallOut = {
      fontSize: `1.3rem`,
      color: `#0000008a`,
    }


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`science`, `learning science`, `cognitive science`, `how people learn`]}
        />
        <h2>About this Site</h2>
        <p>Since April 1st, 2016, I've had a card on my Great Big (Trello) Board of Ideas related to taking the <a href="http://www.usefulscience.org/">Useful Science website</a> and porting it in a way that focused on learning experience science. Fast forward almost three years, and a perfect storm formed to remind me of the idea: I had a great chat with a new coworker about the research she does to find research-backed leadership development models, I saw Mike Taylor's post with a list of 2018 research, and I had a hole in my weekly practice schedule that needed filling.</p>
        <p>So I decided to finally bite the bullet and build out this site.</p>
        <p style={CallOut}>For all LX Designers looking for a starting point in research, there's LX Research.</p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

