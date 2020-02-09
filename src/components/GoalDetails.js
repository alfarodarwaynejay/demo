import React from 'react'
import { Divider } from 'react-md'
import PlanList from './PlanList'
import GoalHeader from './GoalHeader'
const GoalDetails = ({ goal_data }) => (
  <>
    {
      goal_data.map(goal => {
        const plans = goal.plans || []
        return (
          <div className='md-grid  financial_goals' key={goal.goalId}>
            <h3 className='md-cell--12 contact_span details_divider'>
              Goal Info:
            </h3>
            <GoalHeader goal={goal || {}} className='md-cell--12' />
            <h3 className='md-cell--12 contact_span details_divider'>
              Existing Plans:
            </h3>
            <PlanList plans={plans} />
          </div>
        )
      })
    }
    <Divider className='details_divider' />
  </>
)

export default GoalDetails
