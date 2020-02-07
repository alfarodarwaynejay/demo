import React from 'react'
import { SelectionControlGroup } from 'react-md'

const SortDirection = ({ order, onSelectionChange, controls}) => (
  <div className='md-grid'>
    <span className='md-cell--12'>Sort Direction:</span>
    <SelectionControlGroup
      inline
      type='radio'
      value={order}
      id='order-filter'
      name="order-filter"
      controls={controls}
      className='md-cell--12'
      onChange={(value, e) => onSelectionChange(value, e, 'order')}
    />
  </div>
)

export default SortDirection