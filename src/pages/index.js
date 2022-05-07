import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Menu from "../components/menu/menu"
import Intro from "../components/Intro/Intro"

const fullpageOptions = {
  anchors: ["firstPage", "secondPage", "thirdPage"],
  sectionsColor: ["#282c34", "#ff5f45", "#0798ec"],
  callbacks: ["onLeave", "afterLoad"],
  navigation: true,
  parallax: true,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
}

const FullpageWrapper = fullpageProps => (
  <ReactFullpage
    {...fullpageOptions}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state) // eslint-disable-line no-console

      if (state.callback === "onLeave") {
        if (state.direction === "down") {
          console.log("going down..." + state.origin.index)
        }
      }
      return (
        <div>
          <Menu></Menu>
        <div id="fullpage-wrapper">
          <div className="section">
            <Intro />
          </div>
          <div className="section">
            <div className="slide">
              <h3>Slide 2.1</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.2</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.3</h3>
            </div>
          </div>
          <div className="section">
            <h3>Section 3</h3>
          </div>
        </div>
        </div>
      )
    }}
  />
)

export default FullpageWrapper
