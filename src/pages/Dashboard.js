
import "../App.css";
import App from "../components/App";
import Nav from "./Nav";
import QuestionsList from "./QuestionsList";
import QuestionTabs from "./QuestionTabs";
import Tabs from "./QuestionTabs";


const Dashboard = () => {

	return (
		<App className = "app">
			<Nav />
			<QuestionTabs />
			<QuestionsList />
		</App>
	);
};

export default Dashboard;
