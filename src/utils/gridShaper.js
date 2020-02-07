import toLower from 'lodash/toLower'
import orderBy from 'lodash/orderBy'
import filterFunc from './filterFunc'

export default function (list, search, status, order, column) {
  // filter by status
  if (status) {
    list = list.filter(customer => customer.status === status)
  }

  // filter by search field
  if (search) {
    list = list.filter(customer => {
      const { email, personalDetails = {} } = customer
      const { firstName = '', lastName = '' } = personalDetails
      return (
        toLower(email).includes(search)
        || toLower(firstName).includes(search)
        || toLower(lastName).includes(search)
      )
    })
  }

  list = orderBy(list, (e) => filterFunc(e, column), [order])

  return {
    list,
    count: list.length
  }
}