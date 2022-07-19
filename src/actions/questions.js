import { saveQuestionAnswer } from "../utils/api";


export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SAVE_QUESTION_CHOICE = "SAVE_QUESTION_CHOICE";

export default function receiveQuestions (questions) {

	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

export function saveQuestionChoice ({ authedUser, qid, answer }) {

	return {
		type: SAVE_QUESTION_CHOICE,
		authedUser,
		qid,
		answer,
	}
}

export function handleQuestionChoice (info) {

	return (dispatch) => {
		dispatch(saveQuestionChoice(info));

		return saveQuestionAnswer(info)
			.catch((e) => {
			console.warn("Error saving questionAnswer => ", e);

			/* TODO: Dispatch action to undo voting. */
		})
	}
}
