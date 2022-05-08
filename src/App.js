import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Intro from "./components/Intro/Intro"
import Formations from "./components/Formations/Formations"

const fullpageOptions = {
  anchors: ["firstPage", "secondPage", "thirdPage"],
  sectionsColor: ["#F49F0A", "#EFCA08", "#00A6A6"],
  callbacks: ["onLeave", "afterLoad"],
  navigation: true,
  navigationTooltips: ["1", "2", "3"],
  parallax: true,
  parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },

  scrollingSpeed: 1500,
}

const App = fullpageProps => (
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
        <div id="fullpage-wrapper">
          <div className="section">
            <Intro />
          </div>
          <div className="section">
            <Formations />
          </div>
          <div className="section">
            <h3>Section 3</h3>
          </div>
        </div>
      )
    }}
  />
)

export default App
