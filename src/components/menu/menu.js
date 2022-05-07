import React from 'react';
import PropTypes from 'prop-types';

const Menu = () => (
  <div
  className="menu"
  style={{
    position: "fixed",
    top: 0,
    zIndex: 100,
  }}
>
  <ul id="myMenu">
    <li data-menuanchor="firstPage" className="active">
      <a href="#firstPage">Introduction</a>
    </li>
    <li data-menuanchor="secondPage">
      <a href="#secondPage">Formations</a>
    </li>
    <li data-menuanchor="thirdPage">
      <a href="#thirdPage">Third section</a>
    </li>
  </ul>
</div>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
