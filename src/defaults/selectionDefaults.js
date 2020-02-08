const statusControls = [
  {
    label: 'None',
    value: 'none'
  },
  {
    label: 'Active',
    value: 'ACTIVE'
  },
  {
    label: 'Regisering',
    value: 'REGISTERING',
  }
]

const columnControls = [
  {
    label: 'None',
    value: 'none'
  },
  {
    label: 'First Name',
    value: 'firstName'
  },
  {
    label: 'Last Name',
    value: 'lastName',
  },
  {
    label: 'Email',
    value: 'email'
  }
]

const orderControls = [
  {
    label: 'Ascending',
    value: 'asc'
  },
  {
    label: 'Descending',
    value: 'desc',
  }
]

export default {
  orderControls,
  statusControls,
  columnControls
}
