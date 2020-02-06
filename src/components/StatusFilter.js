import React from 'react'
import {
  ExpansionList,
  ExpansionPanel,
  SelectionControlGroup
} from 'react-md'

const StatusFilter = ({ status, onExpandChange, onSelectionChange, controls}) => (
  <ExpansionList>
    <ExpansionPanel
      footer={null}
      label='Filter by Status'
      className='md-cell md-cell--4'
      onExpandToggle={(expanded) => onExpandChange(expanded, 'status')}
    >
      <SelectionControlGroup
        type='radio'
        value={status}
        id='status-filter'
        name="status-filter"
        controls={controls}
        onChange={(value, e) => onSelectionChange(value, e, 'status')}
      />
    </ExpansionPanel>
  </ExpansionList>
)

export default StatusFilter