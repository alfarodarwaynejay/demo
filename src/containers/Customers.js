import React, { PureComponent } from 'react'

class Customers extends PureComponent {
  render() {
    console.log('@@@@', this.props)
    return <span>Customers</span>
  }
}

export default Customers