import React from 'react'
import {
  ExpansionList,
  ExpansionPanel,
  SelectionControlGroup
} from 'react-md'

const ColumnFilter = ({ column, onExpandChange, onSelectionChange, controls}) => (
  <ExpansionList>
    <ExpansionPanel
      footer={null}
      label='Filter by Column'
      className='md-cell md-cell--4'
      onExpandToggle={(expanded) => onExpandChange(expanded, 'column')}
    >
      <SelectionControlGroup
        type='radio'
        value={column}
        id='column-filter'
        name="column-filter"
        controls={controls}
        onChange={(value, e) => onSelectionChange(value, e, 'column')}
      />
    </ExpansionPanel>
  </ExpansionList>
)

export default ColumnFilter