import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import "../App.css";
import { handleInitialData } from "../actions/shared";
import Dashboard from "../pages/Dashboard";
import Leaderboard from "../pages/Leaderboard";
import NewQuestion from "../pages/NewQuestion";
import QuestionDetails from "../pages/QuestionDetails";
import Nav from "./Nav";


const App = () => {

	// console.log("Starting...", props.dispatch(handleInitialData()));
	// useEffect((props) => {
	// 	console.log("Starting...", props)
	// 	props.dispatch(handleInitialData());
	// }, []);

	// const users = useSelector(state => state.users);
	// console.log("Starting...", users);

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
