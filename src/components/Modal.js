import React from 'react'
import ReactDOM from 'react-dom'

import './styles/Modal.css'

function Modal(props) {
  if (!props.isOpen) return ''

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container justify-content-md-center">
        <button onClick={props.onClose} className="Modal__close-button">x</button>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
