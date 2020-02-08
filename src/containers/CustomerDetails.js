import React, { PureComponent } from 'react'
import Img from 'react-image'
import {
  Paper,
  Button,
  Divider
} from 'react-md'

import PlanList from '../components/PlanList'
import GoalHeader from '../components/GoalHeader'
import { detailsKeys, gridDefaults } from '../defaults'
console.log('gridDefaults: ', gridDefaults)
import { textFieldMapper } from '../utils'

import {
  GetGridList,
  GetItemDetails
} from '../redux/actions'

const {
  emailStatus,
  phoneDetailsKeys,
  personalDetailsKeys
} = detailsKeys

class CustomerDetails extends PureComponent {
  componentDidMount() {
    const { dispatch, store, history, location: { pathname } } = this.props
    const id = pathname.replace('/customers/', '')

    if (!store.grid.list.length) {
      dispatch(GetGridList(gridDefaults))
    }

    if (id && !store.details && store.grid.list.length) {
      const data = store.grid.list.find(cust => cust.id === id)
      dispatch(GetItemDetails({
        data,
        callBack: () => history.push(`/customers/${id}`)
      }))
    }
  }

  render() {
    const {
      onHide,
      details
    } = this.props

    const {
      goal_data = {},
      phoneDetails = {},
      personalDetails = {}
    } = details || {}


    const plans = goal_data.length ? goal_data[0].plans : []


    const src = [
      // `https://robohash.org/${email}`,
      '/public/img/person.jpeg'
    ]

    return (
      <div style={{ justifyContent: 'center' }}>
        <section className='md-toolbar-relative'>
          <div id='details_paper' className='md-grid'>
            <Paper
              key='paper'
              zDepth={3}
              id='details_content'
              className='papers__example md-cell--10'
            >
              <Button
                onClick={onHide}
                flat primary swapTheming
              >
                Back
            </Button>
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
                  {textFieldMapper(personalDetails || {}, personalDetailsKeys)}
                  <label className='md-cell--12 contact_span details_divider'>
                    Contact Details:
                  </label>
                  {textFieldMapper(phoneDetails || {}, phoneDetailsKeys)}
                  {textFieldMapper(details || {}, emailStatus)}
                </div>
              </div>
              <Divider className='details_divider' />
              <h2 className='demo__header'>Financial Goals</h2>
              <div className='md-grid' >
                <h3 className='md-cell--12 contact_span details_divider'>
                  Goal Info:
                </h3>
                <GoalHeader goal_data={goal_data || []} className='md-cell--12' />
                <h3 className='md-cell--12 contact_span details_divider'>
                  Existing Plans:
                </h3>
                <PlanList plans={plans || []} />
              </div>
            </Paper>
          </div>
        </section>
      </div>
    )
  }
}

export default CustomerDetails