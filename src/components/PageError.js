import React from 'react'

import './styles/PageError.css'
import serverError from '../images/500-Server-Error.svg'

function PageError(props) {
  return (
    <div className="PageError">
      <img src={serverError} alt={props.error.message} className="PageError__image"/>
    </div>
  )
}

export default PageError
