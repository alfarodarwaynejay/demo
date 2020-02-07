import React from 'react'
import { DialogContainer } from 'react-md'

const Modal = ({ errors, onHide }) => {
  const action = [{
    onClick: onHide,
    primary: true,
    children: 'Close',
  }]
  return errors && (
    <DialogContainer
      modal
      id='modal'
      onHide={onHide}
      actions={action}
      visible={!!errors}
      title={errors.message}
    />
  )
}

export default Modal