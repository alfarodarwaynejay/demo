export default [
  {
    label: 'About',
    to: '/about',
    exact: true,
    icon: 'info_outline',
  },
  {
    label: 'Customers',
    to: '/customers/:id?',
    exact: false,
    icon: 'face',
  }
]