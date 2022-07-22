import { saveQuestionAnswer } from "../utils/api";
import { SAVE_QUESTION_CHOICE, saveQuestionChoice } from "./questions";


export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION";

export default function receiveUsers (users) {

	return {
		type: RECEIVE_USERS,
		users,
	}
}

// export function saveUserQuestion ({ authedUser, id }) {
//
// 	return {
// 		type: SAVE_USER_QUESTION,
// 		authedUser,
// 		id,
// 	}
// }

export function saveUserAnswer ({ authedUser, qid, answer }) {

	return {
		type: SAVE_USER_ANSWER,
		authedUser,
		qid,
		answer,
	}
}

// export function handleUserQuestion (info) {
//
// 	return (dispatch) => {
// 		// dispatch(saveUserQuestion(info));
//
// 		return saveUserQuestion(info)
// 			.catch((e) => {
// 				console.warn("Error adding question to user => ", e);
//
// 				/* TODO: Dispatch action to undo voting. */
// 			})
// 	}
// }

export function handleUserAnswer (info) {

	return (dispatch) => {
		dispatch(saveQuestionAnswer(info));

		return saveUserAnswer(info)
			.catch((e) => {
				console.warn("Error saving questionAnswer => ", e);

				/* TODO: Dispatch action to undo voting. */
			})
	}
}
