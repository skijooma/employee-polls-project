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

	useEffect(() => {
		setAuthenticated(authedUser);
	}, [authedUser]);

	useEffect(() => {
		setQuestionsOnDisplay(filterQuestions(selectedTab));
	}, [selectedTab]);

	const filterQuestions = (selectedTab) => {
		let filteredQuestions = Object.values(questions);
		let sortedFilteredQuestions;

		filteredQuestions = filteredQuestions.filter(q => selectedTab === 2 ?
			questions :
			selectedTab === 1 ?
				(q.optionOne.votes && q.optionOne.votes.includes(authedUser)) || (q.optionTwo.votes && q.optionTwo.votes.includes(authedUser)) :
				(q.optionOne.votes && !q.optionOne.votes.includes(authedUser)) && (q.optionTwo.votes && !q.optionTwo.votes.includes(authedUser)));

		sortedFilteredQuestions = Object.keys(filteredQuestions)
			.sort((a, b) => {
				return filteredQuestions[b].timestamp - filteredQuestions[a].timestamp
			});

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
