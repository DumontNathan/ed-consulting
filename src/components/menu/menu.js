import React from "react"
import PropTypes from "prop-types"
import "./menu.css"

const Menu = ({ sticky }) => {
  return (
    <nav className="navbar">
      <ul className="navbar--link">
        <li data-menuanchor="firstPage" className="active">
          <a href="#firstPage">INTRODUCTION</a>
        </li>
        <li data-menuanchor="secondPage">
          <a href="#secondPage">FORMATIONS</a>
        </li>
        <li data-menuanchor="thirdPage">
          <a href="#thirdPage">GODASSES</a>
        </li>
      </ul>
    </nav>
  )
}

Menu.propTypes = {}

Menu.defaultProps = {}

export default Menu
