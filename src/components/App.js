import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
// import { handleLogin } from "../actions/authedUser";
import { handleInitialData } from "../actions/shared";
import "../App.css";
import Dashboard from "../pages/Dashboard";
import Leaderboard from "../pages/Leaderboard";
import Login from "../pages/Login";
import NewQuestion from "../pages/NewQuestion";
import QuestionDetails from "../pages/QuestionDetails";
import authedUser from "../reducers/authedUser";
import Nav from "./Nav";


const App = () => {

	const dispatch = useDispatch();
	const { authedUser } = useSelector((state) => state);

	console.log("HANDLE INITIAL DATA ==> ", authedUser)

	useEffect(() => {
		// dispatch(handleLogin());
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
				<Route path="/login" element={<Login />} />
				{/*<Route path="/" element={ authedUser ? <Navigate to="/" /> : <Login />} />*/}
			</Routes>
		</div>
	);
};

export default App;
