import React from "react"
import { Link } from "gatsby"

const FooterStyle = {
	background: `#212121`,
	color: `#FFFFFF`,
	padding: `1rem`,
	marginTop: `1.3rem`,
	display: `flex`,
	justifyContent: `center`,
	postion: `absolute`,
	bottom: `0`
}

const LinkStyle = {
	color: `#FFFFFF`,
}

const Footer = () => {
	return(
		<div style={FooterStyle}>
			<Link style={LinkStyle} to="/about">About</Link>
		</div>
	)
}

export default Footer