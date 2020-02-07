import '@babel/polyfill'
import axios from 'axios'
import orderBy from 'lodash/orderBy'
import toLower from 'lodash/toLower'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  REQUESTED,
  GET_GRID_LIST,
  GET_ITEM_DETAILS
} from './types'

function* GetGridList({ payload }) {
  const {
    search,
    filter: {
      status,
      order,
      column
    }
  } = payload

  const filterFunc = (e) => {
    if (['firstName', 'lastName'].includes(column) && e.personalDetails) {
      return e.personalDetails[column]
    }
    return e[column]
  }

  let { data: list } = yield call(axios, '/public/data/customers.json')

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

  list = orderBy(list, filterFunc, [order])

  yield put({
    type: GET_GRID_LIST,
    payload: {
      list,
      count: list.length
    }
  })

}

function* GetItemDetails({ payload }) {
  const { data, callBack } = payload

  try {
    const { data: goal_data } = yield call(axios, `/public/data/goal_${data.id}.json`)
    yield put({
      type: GET_ITEM_DETAILS,
      payload: {
        ...data,
        goal_data
      }
    })
    yield call(callBack)
  } catch (error) {
    console.log('error: ', error)

  }

}

function* sagas() {
  yield takeLatest(`${GET_GRID_LIST}_${REQUESTED}`, GetGridList)
  yield takeLatest(`${GET_ITEM_DETAILS}_${REQUESTED}`, GetItemDetails)
}

export default sagas