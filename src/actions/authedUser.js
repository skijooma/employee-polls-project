import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getUsers } from "../utils/api";


export const SET_AUTHED_USER = "SET_AUTHED_USER";

export default function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id,
	}
}

export function handleLogin(userInfo) {

	return (dispatch) => {
		dispatch(showLoading());

		return getUsers()
			.then((users) => {
				if (users[userInfo.username]) {
					dispatch(setAuthedUser(userInfo.username))
				} else {
					dispatch(setAuthedUser(null))
				}
			})
			.then(() => dispatch(hideLoading()))
	};
}
