import "../App.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import QuestionsList from "../components/QuestionsList";
import QuestionTabs from "../components/QuestionTabs";
import { LoadingBar } from "react-redux-loading-bar";


const Dashboard = () => {

	const { questions, users, loading, authedUser, selectedTab } = useSelector(state => state);
	const [questionsOnDisplay, setQuestionsOnDisplay] = useState(questions);
	const [authenticated, setAuthenticated] = useState(authedUser);
	const wholeState = useSelector(state => state)
	// const [selectedTab, setSelectedTab] = useState(2);

	// console.log("Questions in Dashboard => ", questions);
	// console.log("Users in Dashboard => ", users);
	// console.log("Loading in Dashboard => ", loading);
	// console.log("Authed user in Dashboard => ", authedUser);
	// console.log("Selected tab in Dashboard => ", selectedTab);
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
		sortedFilteredQuestions = Object.keys(filterQuestions)
			.sort((a, b) => Object.keys(filterQuestions[b].timestamp) - Object.keys(filterQuestions[a].timestamp))
		console.log("sortedFilteredQuestions => ", sortedFilteredQuestions);

		return filteredQuestions;
	}

	if (authenticated) {
		return (
			<div>
				<QuestionTabs/>
				<LoadingBar/>
				{loading === true ? null : <QuestionsList questions = {questionsOnDisplay}/>}
			</div>
		);
	}

	return (
		<Navigate to = '/login' />
	)
};

export default Dashboard;
