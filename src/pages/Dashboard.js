import "../App.css";
import QuestionsList from "../components/QuestionsList";
import QuestionTabs from "../components/QuestionTabs";


const Dashboard = () => {

	return (
		<div>
			<QuestionTabs />
			<QuestionsList />
		</div>
	);
};

export default Dashboard;
