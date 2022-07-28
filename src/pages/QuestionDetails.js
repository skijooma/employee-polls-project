import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "../App.css";
import QuestionDetailsCard from "../components/QuestionDetailsCard";


const QuestionDetails = () => {

	const {users, questions, authedUser, loading } = useSelector(state => state);
	const { id } = useParams(); // QuestionId in route params.
	const question = questions[id];
	const user = users[question.author];

	/* Local state variables */
	const [authenticated, setAuthenticated] = useState(null);

	console.log("Ques id in QDetails => ", id)
	console.log("Question in QDetails => ", question)
	console.log("User QDetails => ", user)

	useEffect(() => {
		if (authedUser) {
			setAuthenticated(authedUser);
			console.log("AUTHENTICATION STATE IN Q-DETAILS => ", authenticated, " ", authedUser)
		}
	}, [authedUser, authenticated]);


	return (
		<div className="questionDetailsCardContainer">
			<QuestionDetailsCard question = {question} user = {user}/>
		</ div>
	);
};

export default QuestionDetails;
