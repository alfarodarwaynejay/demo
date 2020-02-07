import {
  GET_GRID_LIST,
  CLEAR_DETAILS,
  GET_ITEM_DETAILS
} from './types'

export const initialState = {
	grid: {
    count: 0,
    list: []
  },
  details: null
}

export const setInitialReducers = ( state=initialState, action={}) => {
  switch(action.type) {
    case GET_GRID_LIST:
			return { ...state, grid: action.payload }
		case GET_ITEM_DETAILS:
      return { ...state, details: action.payload }
    case CLEAR_DETAILS:
      return { ...state, details: null }
		default:
			return state;
	}
}