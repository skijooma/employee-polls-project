import "../App.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import QuestionsList from "../components/QuestionsList";
import QuestionTabs from "../components/QuestionTabs";
import { LoadingBar } from "react-redux-loading-bar";


const Dashboard = () => {

	const { questions, users, loading, authedUser, selectedTab } = useSelector(state => state);
	const [questionsOnDisplay, setQuestionsOnDisplay] = useState(questions);
	// const [selectedTab, setSelectedTab] = useState(2);

	// console.log("Questions in Dashboard => ", questions);
	// console.log("Users in Dashboard => ", users);
	// console.log("Loading in Dashboard => ", loading);
	// console.log("Authed user in Dashboard => ", authedUser);
	// console.log("Selected tab in Dashboard => ", selectedTab);

	useEffect(() => {
		console.log("Selected tab in Dashboard => ", selectedTab);
		setQuestionsOnDisplay(filterQuestions(selectedTab));
		// setQuestionsOnDisplay(questions);
	}, [selectedTab]);
	console.log("questionsOnDisplay in Dashboard => ", questionsOnDisplay);

	const filterQuestions = (selectedTab) => {
		let filteredQuestions = Object.values(questions);
		console.log("Before filtering questions array => ", filteredQuestions);
		filteredQuestions = filteredQuestions.filter(q => selectedTab === 0 ?
			questions :
			selectedTab === 1 ?
			(q.optionOne.votes && q.optionOne.votes.includes(authedUser)) || (q.optionTwo.votes && q.optionTwo.votes.includes(authedUser)) :
				(q.optionOne.votes && !q.optionOne.votes.includes(authedUser)) && (q.optionTwo.votes && !q.optionTwo.votes.includes(authedUser)));
		console.log("After filtering questions array => ", filteredQuestions);

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
