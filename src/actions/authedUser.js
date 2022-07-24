import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getUsers, saveQuestionAnswer } from "../utils/api";
import { saveUserAnswer } from "./users";


export const SET_AUTHED_USER = "SET_AUTHED_USER";

export default function setAuthedUser(id) {
	console.log("Inside setAuthedUser...", id);
	return {
		type: SET_AUTHED_USER,
		id,
	}
}

export function handleLogin(userInfo) {

	console.log("Inside handleLogin...")

	return (dispatch) => {
		dispatch(showLoading());

		return getUsers()
			.then((users) => {
				console.log("Users from DB => ", users);
				console.log("Is sent user in DB => ", userInfo.username ,users[userInfo.username]);
				if (users[userInfo.username]) {
					dispatch(setAuthedUser(userInfo.username))
				} else {
					console.log("No user => ");
					dispatch(setAuthedUser(null))
				}
			})
			.then(() => dispatch(hideLoading()))
	};
}

// export function handleLogout(userInfo) {
//
// 	console.log("Inside handleLogout...")
//
// 	return (dispatch) => {
// 		dispatch(showLoading());
//
// 		return getUsers()
// 			.then((users) => {
// 				console.log("Users from DB => ", users);
// 				console.log("Is sent user in DB => ", userInfo.username ,users[userInfo.username]);
// 				if (users[userInfo.username]) {
// 					dispatch(setAuthedUser(userInfo.username))
// 				} else {
// 					console.log("No user => ");
// 					dispatch(setAuthedUser(null))
// 				}
// 			})
// 			.then(() => dispatch(hideLoading()))
// 	};
// }
