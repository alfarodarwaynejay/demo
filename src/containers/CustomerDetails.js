import React, { PureComponent } from 'react'

class CustomerDetails extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('CustDetails: ', this.props)
    return <h1>Hello</h1>
  }
}

export default CustomerDetails
