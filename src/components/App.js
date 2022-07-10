import { Route, Routes } from "react-router";
import "../App.css";
import Dashboard from "../pages/Dashboard";
import Leaderboard from "../pages/Leaderboard";
import NewQuestion from "../pages/NewQuestion";
import QuestionDetails from "../pages/QuestionDetails";
import Nav from "./Nav";


const App = () => {

	return (
		<div className = "app">
			<Nav />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/home" element={<Dashboard />} />
				<Route path="/questions/:id" element={<QuestionDetails />} />
				<Route path="leaderboard" element={<Leaderboard />} />
				<Route path="/add" element={<NewQuestion />} />
			</Routes>
		</div>
	);
};

export default App;
