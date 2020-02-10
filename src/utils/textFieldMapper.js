import React from 'react'
import { TextField } from 'react-md'
import toLower from 'lodash/toLower'
import startCase from 'lodash/startCase'

const textFieldMapper = (obj, keys) => {
  return keys.map(key => {
    const val = obj[key]
    const label = key === 'dob'
      ? 'Date of Birth'
      : startCase(toLower(startCase(key)))
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
