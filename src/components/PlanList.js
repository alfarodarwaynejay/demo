import React from 'react'
import {
  TableRow,
  DataTable,
  TableBody,
  TableHeader,
  TableColumn,
} from 'react-md'

import { planColumns } from '../defaults'

const PlanList = ({ plans }) => {
  const tableHeader = () => {
    return (
      <TableHeader>
        <TableRow>
          {planColumns.map((col_label) => (
            <TableColumn key={col_label}>{col_label}</TableColumn>
          ))}
        </TableRow>
      </TableHeader>
    )
  }

  const tableRow = () => {
    return plans.map((data) => {
      const {
        planId,
        planCcy,
        modelPortfolioName,
        initialInvestmentAmount,
        recurringInvestmentSchedule = {}
      } = data
      const { interval = '', startingFrom = '', amount = '' } = recurringInvestmentSchedule
      return (
        <TableRow key={planId}>
          <TableColumn>{modelPortfolioName}</TableColumn>
          <TableColumn>{planCcy}</TableColumn>
          <TableColumn>{initialInvestmentAmount}</TableColumn>
          <TableColumn>
            <div className='md-grid'>
              <span className='md-cell--4 recurring_inv'>Start: {startingFrom || 'none'}</span>
              <span className='md-cell--4 recurring_inv'>Interval: {interval || 'none'}</span>
              <span className='md-cell--4 recurring_inv'>Amount: {amount || 'none'}</span>
            </div>
          </TableColumn>
        </TableRow>
      )
    })
  }
  return (
    <DataTable plain>
    {tableHeader()}
    <TableBody>
      {tableRow()}
    </TableBody>
  </DataTable>
  )
}

export default PlanList
