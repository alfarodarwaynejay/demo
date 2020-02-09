import React from 'react'
import {
  TableRow,
  FontIcon,
  DataTable,
  TableBody,
  TableHeader,
  TableColumn,
} from 'react-md'
import { customerListTable } from '../defaults'

const CustomerList = (props) => {
  const {
    onRowClick,
    grid: { list = [] }
  } = props
  const tableHeader = () => {
    return (
      <TableHeader>
        <TableRow>
          {customerListTable.map((col_label) => (
            <TableColumn key={col_label}>{col_label}</TableColumn>
          ))}
        </TableRow>
      </TableHeader>
    )
  }

  const tableRow = () => {
    return list.map((data) => {
      const {
        id,
        email,
        status,
        personalDetails = {}
      } = data
      const { firstName = '', lastName = '' } = personalDetails
      return (
        <TableRow
          key={id}
          onClick={() => onRowClick(data)}
        >
          <TableColumn>{firstName}</TableColumn>
          <TableColumn>{lastName}</TableColumn>
          <TableColumn>{email}</TableColumn>
          <TableColumn>{status}</TableColumn>
          <TableColumn><FontIcon>visibility</FontIcon></TableColumn>
        </TableRow>
      )
    })
  }
  return (
    <DataTable plain responsive className='md-cell--12'>
    {tableHeader()}
    <TableBody>
      {tableRow()}
    </TableBody>
  </DataTable>
  )
}

export default CustomerList
