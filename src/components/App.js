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
import NotFoundPage from "../pages/NotFoundPage";
import QuestionDetails from "../pages/QuestionDetails";
import authedUser from "../reducers/authedUser";
import Nav from "./Nav";
import ProtectedRoute from "./ProtectedRoute";


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
				<Route path="/" element={
					<ProtectedRoute user = { authedUser }>
						<Dashboard />
					</ProtectedRoute>
				} />

				<Route path="/home" element={
					<ProtectedRoute user = { authedUser }>
						<Dashboard />
					</ProtectedRoute>
				} />

				<Route path="/questions/:id" element={
					<ProtectedRoute user = { authedUser }>
						<QuestionDetails />
					</ProtectedRoute>
				} />

				<Route path="/leaderboard" element={
					<ProtectedRoute user = { authedUser }>
						<Leaderboard />
					</ProtectedRoute>
				} />

				<Route path="/add" element={
					<ProtectedRoute user = { authedUser }>
						<NewQuestion />
					</ProtectedRoute>
				} />

				<Route path="*" element={
					<NotFoundPage />
				}/>

				{/*<Route path="/home" element={<Dashboard />} />*/}
				{/*<Route path="/questions/:id" element={<QuestionDetails />} />*/}
				{/*<Route path="leaderboard" element={<Leaderboard />} />*/}
				{/*<Route path="/add" element={<NewQuestion />} />*/}
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;
