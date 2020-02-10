export default [
  {
    label: 'Customers',
    to: '/customers',
    exact: false,
    icon: 'face',
    navigation: true
  },
  {
    label: 'About',
    to: '/about',
    exact: true,
    icon: 'info_outline',
    navigation: true
  },
  {
    to: '/customers/:id?',
    exact: false,
    navigation: false
  },
  {
    to: '/',
    exact: false,
    navigation: false
  }
]