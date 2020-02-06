import {
  GET_GRID_LIST,
  GET_ITEM_DETAILS
} from './types'

const initialReducers = {
	grid: {
    count: 0,
    list: []
  },
  details: {}
}

export const setInitialReducers = ( state=initialReducers, action={}) => {
	switch(action.type) {
		case GET_GRID_LIST:
			return { ...state, grid: action.payload }
		case GET_ITEM_DETAILS:
			return { ...state, details: action.payload }
		default:
			return state;
	}
}