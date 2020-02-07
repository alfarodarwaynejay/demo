import React from 'react'
import Img from 'react-image'
import {
  Paper,
  Button,
  Divider,
  Toolbar,
  TextField,
  DialogContainer
} from 'react-md'

import { detailsKeys } from '../defaults'

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
    phoneDetails = {},
    personalDetails = {}
  } = details || {}

  const { firstName, lastName } = personalDetails
  const titleString = firstName && lastName ? `${firstName} ${lastName}` : email
  const title = `Customers Details: ${titleString}`
  const src = [
    `https://robohash.org/${email}`,
    '/public/img/person.jpeg'
  ]

  const textFieldMapper = (obj, keys) => {
    return keys.map(key => {
      const val = obj[key]
      return (
        <TextField
          disabled
          key={key}
          label={`${key}: `}
          id={key}
          value={val}
          className="md-cell--4"
        />
    )})
  }

  return (
    <DialogContainer
      id="simple-full-page"
      fullPage
      onHide={onHide}
      visible={!!details}
      transitionEnterTimeout={2000}
      aria-labelledby="simple-full-page-dialog-title md-grid"
    >
      <Toolbar
        fixed
        colored
        title={title}
        titleId="simple-full-page-dialog-title"
        nav={<Button icon onClick={onHide}>close</Button>}
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
          </Paper>
        </div>
      </section>
    </DialogContainer>
  )
}

export default CustomerDetails
