import React from 'react'
import { textFieldMapper } from '../utils'

const GoalHeader = ({ goal, className }) => {
  return (
    <div className={`md-grid ${className}`}>
      {textFieldMapper(goal, ['name', 'targetRatio', 'status'])}
    </div>
  )
}

export default GoalHeader
