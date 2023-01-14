import { ADD_FARM, DELETE_FARM, EDIT_FARM } from "./actionTypes";

let initId = 0

export const addFarm = farm => {
	return (dispatch) => {
		dispatch({
			type: ADD_FARM,
			payload: { ...farm, id: initId += 1 }
		})
	}
} 

export const deleteFarm = id => {
	return (dispatch) => {
		dispatch({
			type: DELETE_FARM,
			id
		}) 
	}
}

export const editFarm = (farm) => {
	return (dispatch) => {
		dispatch({
			type: EDIT_FARM,
			payload: farm,
		})
	}
}
