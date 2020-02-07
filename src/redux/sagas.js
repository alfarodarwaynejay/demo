import '@babel/polyfill'
import { axios, gridShaper, detailsShaper } from '../utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { REQUESTED, GET_GRID_LIST, GET_ITEM_DETAILS } from './types'

function* GetGridList({ payload }) {
  const {
    search,
    filter: {
      status,
      order,
      column
    }
  } = payload

  const result = yield call(
    axios,
    '/public/data/customers.json',
    GET_GRID_LIST,
    (data) => gridShaper(data, search, status, order, column)
  )
  yield put(result)
}

function* GetItemDetails({ payload }) {
  const { data, callBack } = payload

  const result = yield call(
    axios,
    `/public/data/goal_${data.id}.json`,
    GET_ITEM_DETAILS,
    goal_data => detailsShaper(goal_data, data),
    { message: 'Record does not exist..' }
  )

  if (result.type === GET_ITEM_DETAILS) {
    yield all([
      put(result),
      call(callBack)
    ])
    return
  }
  yield put(result)
}

function* sagas() {
  yield takeLatest(`${GET_GRID_LIST}_${REQUESTED}`, GetGridList)
  yield takeLatest(`${GET_ITEM_DETAILS}_${REQUESTED}`, GetItemDetails)
}

export default sagas