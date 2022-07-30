import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import "../App.css";
import QuestionsList from "../components/QuestionsList";
import QuestionTabs from "../components/QuestionTabs";


const Dashboard = () => {

	const { questions, users, loading, authedUser, selectedTab } = useSelector(state => state);
	const [questionsOnDisplay, setQuestionsOnDisplay] = useState(questions);
	const [authenticated, setAuthenticated] = useState(authedUser);
	const wholeState = useSelector(state => state)

	console.log("Logging the whole state => ", wholeState)

	useEffect(() => {
		setAuthenticated(authedUser);
	}, [authedUser]);

	useEffect(() => {
		console.log("Selected tab in Dashboard => ", selectedTab);
		setQuestionsOnDisplay(filterQuestions(selectedTab));
		// setQuestionsOnDisplay(questions);
	}, [selectedTab]);
	console.log("questionsOnDisplay in Dashboard => ", questionsOnDisplay);

	const filterQuestions = (selectedTab) => {
		let filteredQuestions = Object.values(questions);
		let sortedFilteredQuestions;

		console.log("Before filtering questions array => ", filteredQuestions);
		filteredQuestions = filteredQuestions.filter(q => selectedTab === 2 ?
			questions :
			selectedTab === 1 ?
				(q.optionOne.votes && q.optionOne.votes.includes(authedUser)) || (q.optionTwo.votes && q.optionTwo.votes.includes(authedUser)) :
				(q.optionOne.votes && !q.optionOne.votes.includes(authedUser)) && (q.optionTwo.votes && !q.optionTwo.votes.includes(authedUser)));

		console.log("After filtering questions array => ", filteredQuestions);
		sortedFilteredQuestions = Object.keys(filteredQuestions)
			.sort((a, b) => {
				return filteredQuestions[b].timestamp - filteredQuestions[a].timestamp
			});
		console.log("After filtering questions array => ", filteredQuestions);
		console.log("sortedFilteredQuestions => ", sortedFilteredQuestions);

		// Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)

		return filteredQuestions;
	}


	return (
		<div>
			<QuestionTabs/>
			<LoadingBar/>
			{loading === true ? null : <QuestionsList questions = {questionsOnDisplay}/>}
		</div>
	);
};

export default Dashboard;
