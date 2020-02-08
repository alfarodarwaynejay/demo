import React from 'react'
import { SelectionControlGroup } from 'react-md'

const SortDirection = ({ className, order, onSelectionChange, controls }) => (
  <div className={`md-grid ${className}`}>
    <span className='md-cell--3 searchLabel'>Sort Direction:</span>
    <SelectionControlGroup
      // inline
      type='radio'
      value={order}
      id='order-filter'
      name="order-filter"
      controls={controls}
      className='md-cell--9'
      onChange={(value, e) => onSelectionChange(value, e, 'order')}
    />
  </div>
)

export default SortDirection