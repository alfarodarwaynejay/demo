import React from 'react'
import { textFieldMapper } from '../utils'

const GoalHeader = ({ goal_data }) => {
  return (
    <div className='md-grid' style={{ justifyContent: 'center' }}>
      {textFieldMapper(goal_data[0], ['name', 'targetRatio', 'status'])}
    </div>
  )
}

export default GoalHeader
