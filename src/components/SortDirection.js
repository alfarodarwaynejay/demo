import React from 'react'
import { Button } from 'react-md'

const SortDirection = ({ className, order, onSelectionChange, controls }) => {
  return (
    <div className={`md-grid ${className}`}>
      {
        controls.map(e => {
          return (
            <Button
              icon
              key={e.value}
              tooltipPosition='left'
              tooltipLabel={`${e.label}`}
              onClick={() => onSelectionChange(e.value, 'order')}
            >
              {e.value === 'asc' ? 'arrow_upward' : 'arrow_downward'}
            </Button>
          )
        })
      }
    </div>
  )
}

export default SortDirection