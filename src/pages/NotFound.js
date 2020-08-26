import React from 'react'
import NotFoundImage from '../images/404-error-page.svg'
import'./styles/NotFound.css'

function NotFound() {
  return <div className="NotFound">
    <img src={ NotFoundImage } className="NotFound__image" alt="Pages Not Found"/>
  </div>
}

export default NotFound