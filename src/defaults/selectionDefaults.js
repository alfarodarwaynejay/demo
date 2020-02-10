const statusControls = [
  {
    label: 'Active',
    value: 'ACTIVE'
  },
  {
    label: 'Inactive',
    value: 'INACTIVE'
  },
  {
    label: 'Registering',
    value: 'REGISTERING',
  }
]

const columnControls = [
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
