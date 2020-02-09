import React from 'react'
import { TextField } from 'react-md'

const textFieldMapper = (obj, keys) => {
  return keys.map(key => {
    const val = obj[key]
    return (
      <TextField
        disabled
        key={key}
        label={`${key}: `}
        id={key}
        value={val || 'none'}
        className="md-cell--4"
      />
    )
  })
}

export default textFieldMapper
