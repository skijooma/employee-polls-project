import { saveQuestionAnswer } from "../utils/api";
import { SAVE_QUESTION_CHOICE, saveQuestionChoice } from "./questions";


export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";

export default function receiveUsers (users) {

	return {
		type: RECEIVE_USERS,
		users,
	}
}

export function saveUserAnswer ({ authedUser, qid, answer }) {

	return {
		type: SAVE_USER_ANSWER,
		authedUser,
		qid,
		answer,
	}
}

export function handleUserAnswer (info) {

	return (dispatch) => {
		dispatch(saveUserAnswer(info));

		return saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error saving questionAnswer => ", e);

				/* TODO: Dispatch action to undo voting. */
			})
	}
}
