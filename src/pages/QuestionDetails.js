import "../App.css";
import { useSelector } from "react-redux";
import QuestionDetailsCard from "../components/QuestionDetailsCard";
import {useParams} from "react-router";


const QuestionDetails = () => {

	const {users, questions, authedUser, loading } = useSelector(state => state);
	const { id } = useParams(); // QuestionId in route params.
	const question = questions[id];
	const user = users['tylermcginnis']

	console.log("Ques id in QDetails => ", id)
	console.log("Question in QDetails => ", question)
	// console.log("Question QDetails => ", question.author)
	// console.log("Author in QDetails => ", Object.getOwnPropertyNames(question))
	console.log("User QDetails => ", user)


	return (
		<div>
			<QuestionDetailsCard question = {question} user={user}/>
		</ div>
	);
};

export default QuestionDetails;
