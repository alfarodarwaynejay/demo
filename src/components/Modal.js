import React from 'react'
import { DialogContainer } from 'react-md'

const Modal = ({ message, width, onHide, children }) => {
  const action = [{
    onClick: onHide,
    primary: true,
    children: 'Close',
  }]
  return !!message && (
    <DialogContainer
      modal
      id='modal'
      width={width}
      autosizeContent
      onHide={onHide}
      actions={action}
      title={message}
      visible={!!message}
    >
      {children}
    </DialogContainer>
  )
}

export default Modal