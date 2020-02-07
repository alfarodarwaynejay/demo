module.exports = {
  GetGridList(data) {
    return {
      type: `GET_GRID_LIST_REQUESTED`,
      payload: data
    }
  },
  GetItemDetails(data) {
    return {
      type: `GET_ITEM_DETAILS_REQUESTED`,
      payload: data
    }
  },
  ClearDetails() {
    return {
      type: 'CLEAR_DETAILS'
    }
  }
}
