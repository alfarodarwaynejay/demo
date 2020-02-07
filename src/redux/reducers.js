import {
  HIDE_MODAL,
  CLEAR_DETAILS,
  GET_GRID_LIST,
  NETWORK_ERROR,
  GET_ITEM_DETAILS
} from './types'

export const initialState = {
  errors: null,
  details: null,
	grid: {
    count: 0,
    list: []
  }
}

export const setInitialReducers = (state=initialState, action={}) => {
  switch(action.type) {
    case GET_GRID_LIST:
			return { ...state, grid: action.payload }
    case NETWORK_ERROR:
      return { ...state, errors: action.payload}
		case GET_ITEM_DETAILS:
      return { ...state, details: action.payload }
    case CLEAR_DETAILS:
      return { ...state, details: null }
    case HIDE_MODAL:
      return { ...state, errors: null }
		default:
			return state;
	}
}