import React, { PureComponent } from 'react'
import Img from 'react-image'
import { connect } from 'react-redux'
import { Paper, Button, Divider } from 'react-md'

import { textFieldMapper } from '../utils'
import GoalDetails from '../components/GoalDetails'
import { detailsKeys, gridDefaults } from '../defaults'

import {
  GetGridList,
  ClearDetails,
  GetItemDetails
} from '../redux/actions'

const {
  emailStatus = [],
  phoneDetailsKeys = [],
  personalDetailsKeys = []
} = detailsKeys || {}

class CustomerDetails extends PureComponent {
  componentDidMount() {
    const { dispatch, store } = this.props
    if (!store.grid.count) {
      dispatch(GetGridList(gridDefaults))
    }
  }

  componentDidUpdate() {
    const { dispatch, store, history, match: { params } } = this.props
    if (params.id && !store.details && store.grid.count) {
      const data = store.grid.list.find(cust => cust.id === params.id)
      dispatch(GetItemDetails({
        data,
        callBack: () => history.push(`/customers/${params.id}`)
      }))
    }
  }

  onHide = () => {
    const { dispatch, history } = this.props
    dispatch(ClearDetails())
    history.push('/customers')
  }

  render() {
    const { store: { details } } = this.props

    const {
      goal_data = [],
      phoneDetails = {},
      personalDetails = {}
    } = details || {}


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
                onClick={this.onHide}
                flat primary swapTheming
              >
                Back
              </Button>
              <h1 className='demo__header customer_header'>Customers Details</h1>
              <div className='md-grid customer_details'>
                <Img
                  src={src}
                  alt='Image Loader'
                  className='details_img md-cell--3'
                />
                <div
                  className='md-grid md-cell--9'
                >
                  <h3 className='md-cell--12 contact_span details_divider'>
                    Personal Details:
                  </h3>
                  {textFieldMapper(personalDetails || {}, personalDetailsKeys)}
                  <h3 className='md-cell--12 contact_span details_divider'>
                    Contact Details:
                  </h3>
                  {textFieldMapper(phoneDetails || {}, phoneDetailsKeys)}
                  {textFieldMapper(details || {}, emailStatus)}
                </div>
              </div>
              <Divider className='details_divider' />
              <h1 className='demo__header financial_header'>Financial Goals</h1>
              <GoalDetails goal_data={goal_data} />
            </Paper>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(
  ({ setInitialReducers }) => ({ store: { ...setInitialReducers } }),
  null
)(CustomerDetails)
