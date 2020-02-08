import React from 'react'
import {
  ExpansionList,
  ExpansionPanel,
  SelectionControlGroup
} from 'react-md'

const StatusFilter = ({ status, onExpandChange, onSelectionChange, controls, className }) => (
  // <ExpansionList className={`filter-drop--down ${className}`} >
  //   <ExpansionPanel
  //     footer={null}
  //     label='Filter by Status'
  //     className='md-cell md-cell--4'
  //     onExpandToggle={(expanded) => onExpandChange(expanded, 'status')}
  //   >

  //   </ExpansionPanel>
  // </ExpansionList>
  <div className={`md-grid ${className}`}>
    <span className='md-cell--3 searchLabel'>Filter by Status:</span>
    <SelectionControlGroup
      // inline
      type='radio'
      value={status}
      id='status-filter'
      name="status-filter"
      controls={controls}
      onChange={(value, e) => onSelectionChange(value, e, 'status')}
    />
  </div>
)

export default StatusFilter
