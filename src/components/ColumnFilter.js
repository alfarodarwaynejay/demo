import React from 'react'
import {
  ExpansionList,
  ExpansionPanel,
  SelectionControlGroup
} from 'react-md'

const ColumnFilter = ({ className, column, onExpandChange, onSelectionChange, controls }) => (
  // <ExpansionList id='filter-drop--down' className={`filter-drop--down ${className}`}>
  //   <ExpansionPanel
  //     footer={null}
  //     label='Order by Column'
  //     className='md-cell md-cell--4'
  //     onExpandToggle={(expanded) => onExpandChange(expanded, 'column')}
  //   >
  //   </ExpansionPanel>
  // </ExpansionList>
  <div className={`md-grid ${className}`}>
    <span className='md-cell--3 searchLabel'>Order by Column:</span>
    <SelectionControlGroup
      // inline
      type='radio'
      value={column}
      id='column-filter'
      name="column-filter"
      controls={controls}
      onChange={(value, e) => onSelectionChange(value, e, 'column')}
    />
  </div>
)

export default ColumnFilter