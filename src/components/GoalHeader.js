import React from 'react'
import { textFieldMapper } from '../utils'

const GoalHeader = ({ goal_data, className }) => {
  return (
    <div className={`md-grid ${className}`}>
      {textFieldMapper(goal_data[0] || {}, ['name', 'targetRatio', 'status'])}
    </div>
  )
}

export default GoalHeader
