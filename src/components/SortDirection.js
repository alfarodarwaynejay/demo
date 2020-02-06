import React from 'react'
import { SelectionControlGroup } from 'react-md'

const SortDirection = ({ order, onSelectionChange, controls}) => (
  <>
    <span>Sort Direction:</span>
    <SelectionControlGroup
      type='radio'
      value={order}
      id='order-filter'
      name="order-filter"
      controls={controls}
      onChange={(value, e) => onSelectionChange(value, e, 'order')}
    />
  </>
)

export default SortDirection