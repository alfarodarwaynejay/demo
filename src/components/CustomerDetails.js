import React from 'react'
import Img from 'react-image'
import {
  Paper,
  Button,
  Divider,
  Toolbar,
  DialogContainer
} from 'react-md'

import PlanList from './PlanList'
import GoalHeader from './GoalHeader'
import { detailsKeys } from '../defaults'
import { textFieldMapper } from '../utils'

const {
  emailStatus,
  phoneDetailsKeys,
  personalDetailsKeys
} = detailsKeys

const CustomerDetails = (props) => {
  const {
    onHide,
    details
  } = props

  const {
    email,
    goal_data = {},
    phoneDetails = {},
    personalDetails = {}
  } = details || {}

  const { firstName, lastName } = personalDetails
  const plans = goal_data.length ? goal_data[0].plans : []
  const titleString = firstName && lastName ? `${firstName} ${lastName}` : email
  const title = `Customers Details: ${titleString}`
  const src = [
    // `https://robohash.org/${email}`,
    '/public/img/person.jpeg'
  ]

  return (
    <div style={{ justifyContent: 'center'}}>
      <DialogContainer
        id="simple-full-page"
        fullPage
        visible={!!details}
        onHide={() => onHide()}
        transitionEnterTimeout={2000}
        aria-labelledby="simple-full-page-dialog-title md-grid"
      >
        <Toolbar
          fixed
          colored
          title={title}
          titleId="simple-full-page-dialog-title"
          nav={<Button icon onClick={() => onHide()}>close</Button>}
        />
        <section className='md-toolbar-relative'>
          <div id='details_paper' className='md-grid'>
            <Paper
              key='paper'
              zDepth={3}
              id='details_content'
              className='papers__example md-cell--10'
            >
              <h1 className='demo__header'>Customers Details</h1>
              <div className='md-grid'>
                <Img
                  src={src}
                  alt='Image Loader'
                  className='details_img md-cell--3'
                />
                <div
                  className='md-grid md-cell--9'
                >
                  <label className='md-cell--12 contact_span details_divider'>
                    Personal Details:
                  </label>
                  { textFieldMapper(personalDetails, personalDetailsKeys) }
                  <label className='md-cell--12 contact_span details_divider'>
                    Contact Details:
                  </label>
                  { textFieldMapper(phoneDetails, phoneDetailsKeys) }
                  { textFieldMapper(details || {}, emailStatus) }
                </div>
              </div>
              <Divider className='details_divider'/>
              <h2 className='demo__header'>Financial Goals</h2>
              <div className='md-grid' >
                <h3 className='md-cell--12 contact_span details_divider'>
                  Goal Info:
                </h3>
                <GoalHeader goal_data={goal_data}/>
                <h3 className='md-cell--12 contact_span details_divider'>
                  Existing Plans:
                </h3>
                <PlanList plans={plans}/>
              </div>
            </Paper>
          </div>
        </section>
      </DialogContainer>
    </div>
  )
}

export default CustomerDetails
