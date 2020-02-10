import React from 'react'
import { SelectField } from 'react-md'

const StatusFilter = ({ status, onSelectionChange, controls, className }) => {
  const menus = controls.map(item => {
    const { label, value } = item
    return (
      <div key={value} className='md-tile-text--primary md-text'>
        <input
          name='status'
          value={value}
          type="checkbox"
          checked={status.includes(value)}
          className='md-icon material-icons md-text--inherit'
          onChange={(e) => {
            e.preventDefault()
            e.stopPropagation()
            const { value: buttonVal, checked } = e.target
            onSelectionChange(buttonVal, 'status', checked)
          }}
        />
        <label htmlFor={label}>{label}</label>
      </div>
    )
  })
  return (
    <div className={`md-grid ${className}`}>
      <SelectField
        menuItems={menus}
        id='status-filter'
        name="status-filter"
        placeholder="Status"
        onChange={() => { }}
        className="md-cell md-cell--12"
        position={SelectField.Positions.BELOW}
      />
    </div>
  )
}


export default StatusFilter
