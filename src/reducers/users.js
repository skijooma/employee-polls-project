import { ANSWER_QUESTION } from "../actions/questions";
import { RECEIVE_USERS, SAVE_USER_ANSWER } from "../actions/users";


export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		case SAVE_USER_ANSWER:
			console.log("STATE (USERS) **** ", state)
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					answers: state[action.authedUser].answers.hasOwnProperty(action.answer) ?
						state[action.authedUser].answers :
						{
							...state[action.authedUser].answers,
							...{ [action.qid]: action.answer }
						}
				}
			}
		default:
			return state;
	}
}
