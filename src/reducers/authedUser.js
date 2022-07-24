
import { SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
	switch (action.type) {
		case SET_AUTHED_USER:
			console.log("Inside authedUser reducer...", action);
			return action.id;
		default:
			return state;
	}
}

// console.log("STATE IN AUTHED_USER REDUCER => ", state, " ACTION => ", action)
// return {
// 	id: Object.keys(state.users).includes(action.username)
// 		&& Object.keys(state.users).includes(action.username) ? action.username : state
// }
