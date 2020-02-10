import React from 'react'
import { DialogContainer } from 'react-md'

const Modal = ({ message, width, onHide, titleStyle, titleClassName, children }) => {
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
      titleStyle={titleStyle}
      titleClassName={titleClassName}
    >
      {children}
    </DialogContainer>
  )
}

export default Modal