import { ADD_FARM, DELETE_FARM, EDIT_FARM } from './actionTypes'
const farm = (state = [], action) => {
	switch (action.type) {
		case ADD_FARM:
			return [
				...state,
				action.payload,
			]
		case EDIT_FARM:
			return state.map(farm =>
				farm.id === action.payload.id ? action.payload : farm
			)
		case DELETE_FARM:
			return state.filter(farm =>
				farm.id !== action.id
			)
		default:
			return state
	}
} 

export default farm