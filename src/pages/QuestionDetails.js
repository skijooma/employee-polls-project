import "../App.css";
import { useSelector } from "react-redux";
import QuestionDetailsCard from "../components/QuestionDetailsCard";
import {useParams} from "react-router";


const QuestionDetails = () => {

	const {users, questions, authedUser, loading } = useSelector(state => state);
	const { id } = useParams(); // QuestionId in route params.
	const question = questions[`${id}`];
	const user = users[`${question.author}`]

	console.log("Props in QDetails => ", id)
	console.log("Question QDetails => ", question)
	console.log("User QDetails => ", user)


	return (
		<div>
			<QuestionDetailsCard question = {question} user = {user}/>
			QuestionDetails
		</ div>
	);
};

export default QuestionDetails;
