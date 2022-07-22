
import { RECEIVE_QUESTIONS, ANSWER_QUESTION, SAVE_QUESTION_CHOICE, ADD_QUESTION } from "../actions/questions";
import authedUser from "./authedUser";

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			}
		case SAVE_QUESTION_CHOICE:
			console.log("STATE **** ", state)
			return {
				...state,
				[action.qid]: {
					...state[action.qid],
					[action.answer]: state[action.qid][action.answer].votes.includes(action.authedUser) ?
						state[action.qid][action.answer] :
						{
						...state[action.qid][action.answer],
						votes: state[action.qid][action.answer].votes.concat([action.authedUser])
					}
				}
			}
		default:
			return state;
	}
}

// users = {
// 	...users,
// 	[authedUser]: {
// 		...users[authedUser],
// 		answers: {
// 			...users[authedUser].answers,
// 			[qid]: answer
// 		}
// 	}
// }


// questions = {
// 	...questions,
// 	[qid]: {
// 		...questions[qid],
// 		[answer]: {
// 			...questions[qid][answer],
// 			votes: questions[qid][answer].votes.concat([authedUser])
// 		}
// 	}
// }
