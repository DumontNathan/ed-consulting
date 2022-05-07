import React from 'react';
import PropTypes from 'prop-types';
import {formations} from './Formations.module.css'

const Formations = () => (
  <div className={formations}>
    <div className="slide">
              <h3>Formation 1</h3>
            </div>
            <div className="slide">
              <h3>Formation 2</h3>
            </div>
            <div className="slide">
              <h3>Formation 3</h3>
            </div>
  </div>
);

Formations.propTypes = {};

Formations.defaultProps = {};

export default Formations;
