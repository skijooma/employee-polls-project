import { FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router";
import { handleLogin } from "../actions/authedUser";


const Login = () => {

	const { authedUser, users } = useSelector(state => state);
	const dispatch = useDispatch();
	const location = useLocation();
	const [username, setUsername] = useState("tylermcginnis");
	const [password, setPassword] = useState("abc321");
	const [authenticated, setAuthenticated] = useState(false);
	const navigate = useNavigate();
	const redirectPath = (location && location.state) ? location.state.path : "/login";

	useEffect(() => {
		if (authedUser) {
			setAuthenticated(true);
		}
	}, [authedUser]);

	const handleUsernameChange = (e) => {
		const value = e.target.value;
		setUsername(value)
	};

	const handlePasswordChange = (e) => {
		const value = e.target.value;
		setPassword(value)
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(handleLogin({ username, password }));

		setUsername("");
		setPassword("");
	};

	if (authenticated) {
		return (
			<Navigate to = {redirectPath} replace = {true}/>
		)
	}

	return (
		<div className = "loginContainer">
			<h3>Login</h3>
			<form className = "loginForm" onSubmit = {handleSubmit}>
				<FormControl fullWidth sx = {{ m: 1 }} variant = "standard">
					<TextField id = "username" label = "Username" variant = "outlined" value = {username}
							   onChange = {handleUsernameChange} data-testid = "username" name="username"/>
				</FormControl>
				<FormControl fullWidth sx = {{ m: 1 }} variant = "standard">
					<TextField id = "password" label = "Password" variant = "outlined" value = {password}
							   onChange = {handlePasswordChange} data-testid = "password" name="password"/>
				</FormControl>
				<button className = "btn" type = "submit" disabled = {username === "" || password === ""}
						data-testid = "login-button">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;
