module.exports = {
  GetGridList(data) {
    return {
      type: `GET_GRID_LIST`,
      payload: data
    }
  },
  GetItemDetails(data) {
    return {
      type: `GET_ITEM_DETAILS`,
      payload: data
    }
  }
}
