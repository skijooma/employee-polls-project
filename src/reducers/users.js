import { RECEIVE_USERS, SAVE_QUESTION_TO_USER, SAVE_USER_ANSWER } from "../actions/users";


export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		case SAVE_USER_ANSWER:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					answers: state[action.authedUser].answers.hasOwnProperty(action.answer) ?
						state[action.authedUser].answers :
						{
							...state[action.authedUser].answers,
							[action.qid]: action.answer
						}
				}
			};
		case SAVE_QUESTION_TO_USER:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([action.question.id])
				}
			}
		default:
			return state;
	}
}
