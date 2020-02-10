import React from 'react'
import { TextField } from 'react-md'
import toLower from 'lodash/toLower'
import startCase from 'lodash/startCase'
import customTextFieldKeys from '../defaults/customTextFieldKeys'

const textFieldMapper = (obj, keys) => {
  return keys.map(key => {
    const val = obj[key]
    const label = customTextFieldKeys[key]
      || startCase(toLower(startCase(key)))
    return (
      <TextField
        disabled
        key={key}
        label={`${label}: `}
        id={key}
        value={val || 'none'}
        className="md-cell md-cell--4"
      />
    )
  })
}

export default textFieldMapper
