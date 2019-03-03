import React from "react"

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
			<a style={LinkStyle} href="">About</a>
		</div>
	)
}

export default Footer