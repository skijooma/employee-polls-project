import "../App.css";
import { useSelector } from "react-redux";
import QuestionsList from "../components/QuestionsList";
import QuestionTabs from "../components/QuestionTabs";
import { LoadingBar } from "react-redux-loading-bar";


const Dashboard = () => {

	const { questions, users, loading, authedUser } = useSelector(state => state );
	console.log("Questions in Dashboard => ", questions);
	console.log("Users in Dashboard => ", users);
	console.log("Loading in Dashboard => ", loading);
	console.log("Authed user in Dashboard => ", authedUser);

	return (
		<div>
			<QuestionTabs />
			<LoadingBar/>
			{ loading === true ? null : <QuestionsList questions = {questions} />}

			{/*<ul>*/}
			{/*	{ Object.keys(questions).map((id) => (*/}
			{/*		<li>*/}
			{/*			<div>Question Id: {id}</div>*/}
			{/*		</li>*/}
			{/*	))}*/}
			{/*</ul>*/}
		</div>
	);
};

export default Dashboard;
