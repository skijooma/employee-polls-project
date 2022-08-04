import { hideLoading, showLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addQuestionToUser } from "./users";


export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SAVE_QUESTION_CHOICE = "SAVE_QUESTION_CHOICE";

export default function receiveQuestions(questions) {

	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {

	return (dispatch) => {

		dispatch(showLoading());

		return saveQuestion({
			optionOneText,
			optionTwoText,
			author,
		})
			.then((question) => {
				dispatch(addQuestion(question));
				dispatch(addQuestionToUser(question));
			})
			.then(() => dispatch(hideLoading()));
	};
}

export function saveQuestionChoice({ authedUser, qid, answer }) {

	return {
		type: SAVE_QUESTION_CHOICE,
		authedUser,
		qid,
		answer,
	}
}

export function handleQuestionChoice(info) {

	return (dispatch) => {
		dispatch(saveQuestionChoice(info));

		return saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error saving questionAnswer => ", e);

				/* TODO: Dispatch action to undo voting. */
			})
	}
}
