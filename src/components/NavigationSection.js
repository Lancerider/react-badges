import React from 'react'
import { Link } from 'react-router-dom'

import goBackButton from '../images/go-back-button.svg'
import './styles/navigationSection.css'

function NavigationSection(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 m-3">
          <Link to={props.to}>
            <div>
              <img
                src={goBackButton}
                alt="Go Back"
                className="NavigationSection__image"
              />
              <span className="NavigationSection__text">Regresar</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavigationSection
