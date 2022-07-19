import { getInitialData, saveQuestionAnswer } from "../utils/api";
import setAuthedUser from "./authedUser";
import receiveQuestions, { handleQuestionChoice, saveQuestionChoice } from "./questions"
import setSelectedTab from "./selectedTab";
import receiveUsers, { handleUserAnswer, saveUserAnswer } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";


const AUTHED_ID = "tylermcginnis";
const SELECTED_TAB_VALUE = 0;

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
			dispatch(setAuthedUser(AUTHED_ID));
			dispatch(setSelectedTab(SELECTED_TAB_VALUE))
			dispatch(hideLoading());
		});
	};
}

export function handleAnswerQuestion (info) {

	return (dispatch) => {
		dispatch(handleQuestionChoice(info));
		dispatch(handleUserAnswer(info));
	}
}
