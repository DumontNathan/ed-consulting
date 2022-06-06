import React from "react"
import PropTypes from "prop-types"
import "./Intro.css"
import { StaticImage } from "gatsby-plugin-image"

const Intro = () => (
  <div className="intro">
    <div id="div1">
      <StaticImage src="https://i.pinimg.com/564x/d8/04/ee/d804ee9bf80daf10e697d92205949de4.jpg"></StaticImage>
    </div>
    <div id="div2">
      <p>reste</p>
    </div>
  </div>
)

Intro.propTypes = {}

Intro.defaultProps = {}

export default Intro
