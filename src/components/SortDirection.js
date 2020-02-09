import React from 'react'
import { SelectionControlGroup, FontIcon, Button } from 'react-md'

const SortDirection = ({ className, order, onSelectionChange, controls }) => {
  console.log('order: ====>>> ', order, controls)
  return (
    <div className={`md-grid ${className}`}>
      {/* <span className='md-cell--3 searchLabel'>Sort Direction:</span> */}
      {/*<SelectionControlGroup
        type='radio'
        value={order}
        id='order-filter'
        name="order-filter"
        controls={controls}
        className='md-cell--9'
        checkedCheckboxIcon={<FontIcon>swap_vert</FontIcon>}
        onChange={(value) => onSelectionChange(value, 'order')}
      />*/}
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
              { e.value === 'asc' ? 'arrow_upward' : 'arrow_downward'}
            </Button>
          )
        })
      }
    </div>
  )
}

export default SortDirection