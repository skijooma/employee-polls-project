
import "../App.css";
import Nav from "./Nav";
import QuestionsList from "./QuestionsList";
import QuestionTabs from "./QuestionTabs";
import Tabs from "./QuestionTabs";


const App = () => {

	return (
		<div className = "app">
			<Nav />
			<QuestionTabs />
			<QuestionsList />
		</div>
	);
};

export default App;
