import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>
        Please feel free to contact me at my email address:
        jyochsnagongal@gmail.com
      </p>
    </div>
  )
}
