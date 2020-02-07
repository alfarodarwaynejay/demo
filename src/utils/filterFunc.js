export default function (e, column) {
  switch (column) {
    case 'firstName':
    case 'lastName':
      // handling records with no firstName & lastName
      return (e.personalDetails || {})[column]
    case 'email':
      return e[column]
    default:
      if (e.personalDetails) {
        return e.personalDetails.firstName
      }
      return e[column]
  }
}