import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { handleInitialData } from "../actions/shared";
import "../App.css";
import Dashboard from "../pages/Dashboard";
import Leaderboard from "../pages/Leaderboard";
import NewQuestion from "../pages/NewQuestion";
import QuestionDetails from "../pages/QuestionDetails";
import Nav from "./Nav";


const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleInitialData());
	}, []);

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
