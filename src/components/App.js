import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
// import { handleLogin } from "../actions/authedUser";
import { handleInitialData } from "../actions/shared";
import "../App.css";
import Dashboard from "../pages/Dashboard";
import Leaderboard from "../pages/Leaderboard";
import Login from "../pages/Login";
import NewQuestion from "../pages/NewQuestion";
import NotFoundPage from "../pages/NotFoundPage";
import QuestionDetails from "../pages/QuestionDetails";
import Nav from "./Nav";
import ProtectedRoute from "./ProtectedRoute";


const App = () => {

	const dispatch = useDispatch();
	const { authedUser } = useSelector((state) => state);

	useEffect(() => {
		dispatch(handleInitialData());
	}, []);

	return (
		<div className = "app">
			<Nav/>
			<Routes>
				<Route path = "/" element = {
					<ProtectedRoute user = {authedUser}>
						<Dashboard/>
					</ProtectedRoute>
				}/>

				<Route path = "/home" element = {
					<ProtectedRoute user = {authedUser}>
						<Dashboard/>
					</ProtectedRoute>
				}/>

				<Route path = "/questions/:id" element = {
					<ProtectedRoute user = {authedUser}>
						<QuestionDetails/>
					</ProtectedRoute>
				}/>

				<Route path = "/leaderboard" element = {
					<ProtectedRoute user = {authedUser}>
						<Leaderboard/>
					</ProtectedRoute>
				}/>

				<Route path = "/add" element = {
					<ProtectedRoute user = {authedUser}>
						<NewQuestion/>
					</ProtectedRoute>
				}/>

				<Route path = "*" element = {
					<ProtectedRoute user = {authedUser}>
						<NotFoundPage/>
					</ProtectedRoute>
				}/>

				<Route path = "/login" element = {<Login/>}/>
			</Routes>
		</div>
	);
};

export default App;
