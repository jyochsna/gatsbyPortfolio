import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hi My Name is Jyochsna Gongal" />
      <p>
        I am a Full Stack Web Developer looking for new career opportunities.
      </p>
      <p>
        To know more about my work and projects I have been working, please
        visit my Portfolio
      </p>
      <h4>Below you will see some random images</h4>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
