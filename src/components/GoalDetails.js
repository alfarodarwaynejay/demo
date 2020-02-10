import React, { useState } from 'react'
import { Divider } from 'react-md'
import GoalHeader from './GoalHeader'
import PlanList from './PlanList'
import Modal from './Modal'
const GoalDetails = ({ goal_data }) => {
  const [plans, setPlans] = useState([])
  const [visible, setVisible] = useState('')

  const onRowClick = (data) => {
    setPlans(data)
    setVisible('Plans')
  }

  const onHide = () => {
    setPlans([])
    setVisible('')
  }


  return (
    <>
      <div className='md-grid  financial_goals' >
        {/* <h3 className='md-cell--12 contact_span details_divider'>
          Goal Info:
        </h3> */}
        <GoalHeader
          goal_data={goal_data}
          onRowClick={onRowClick}
        />
        <Modal
          width={1250}
          onHide={onHide}
          message={visible}
        >
          <PlanList plans={plans} />
        </Modal>
      </div>
      <Divider className='details_divider' />
    </>
  )
}

export default GoalDetails
