import React from 'react'
// import { textFieldMapper } from '../utils'

import {
  FontIcon,
  TableRow,
  DataTable,
  TableBody,
  TableHeader,
  TableColumn,
} from 'react-md'


const GoalHeader = ({ goal_data, onRowClick }) => {
  const tableHeader = () => {
    return (
      <TableHeader>
        <TableRow>
          {['Name', 'Target Ratio', 'Status'].map((col_label) => (
            <TableColumn key={col_label}>{col_label}</TableColumn>
          ))}
        </TableRow>
      </TableHeader>
    )
  }

  const tableRow = () => {
    return goal_data.map((goal) => {
      const {
        name,
        goalId,
        plans = [],
        status,
        targetRatio
      } = goal
      return (
        <TableRow key={goalId} onClick={() => onRowClick(plans)}>
          <TableColumn>{name}</TableColumn>
          <TableColumn>{targetRatio}</TableColumn>
          <TableColumn>{status}</TableColumn>
          <TableColumn><FontIcon>visibility</FontIcon></TableColumn>
        </TableRow>
      )
    })
  }
  return (
    <DataTable plain responsive className='md-cell md-cell--12'>
      {tableHeader()}
      <TableBody>
        {tableRow()}
      </TableBody>
    </DataTable>
  )
}

export default GoalHeader
