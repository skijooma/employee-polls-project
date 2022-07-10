
import "../App.css";
import App from "../components/App";
import QuestionDetailsCard from "../components/QuestionDetailsCard";
import Nav from "./Nav";
import QuestionsList from "./QuestionsList";
import QuestionTabs from "./QuestionTabs";
import Tabs from "./QuestionTabs";


const QuestionDetails = () => {

	return (
		<App className = "app">
			<Nav />
			<QuestionDetailsCard />
		</App>
	);
};

export default QuestionDetails;
