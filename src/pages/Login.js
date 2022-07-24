import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { handleLogin } from "../actions/authedUser";


const Login = () => {

	const { authedUser, users } = useSelector( state => state);
	const dispatch = useDispatch();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		if (authedUser) {
			setAuthenticated(true);
			console.log("AUTHED_USER CHANGED => ", authenticated)
		}
	}, [authedUser]);

	const handleUsernameChange = (e) => {
		const value = e.target.value;

		console.log(value);
		setUsername(value)
	};

	const handlePasswordChange = (e) => {
		const value = e.target.value;

		console.log(value);
		setPassword(value)
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Username: ", username);
		console.log("Password: ", password);

		dispatch(handleLogin({ username, password }));

		setUsername("");
		setPassword("");
	};

	if (authenticated) {
		return (
			<Navigate to = '/' />
		)
	}

	return (
		<div>
			<h3 className="center">Login</h3>
			<form className="new-question" onSubmit={handleSubmit}>
				{/* TODO: Redirect to / if submitted */}
				<div>
					<TextField id="username" label="Username" variant="outlined" value={username} onChange={handleUsernameChange}/>
					{/*{optionOneCharactersLeft <= 50 && <div className="option-text-length">{optionOneCharactersLeft}</div>}*/}
				</div>

				<div>
					<TextField id="password" label="Password" variant="outlined" value={password} onChange={handlePasswordChange}/>
					{/*{optionTwoCharactersLeft <= 50 && <div className="option-text-length">{optionTwoCharactersLeft}</div>}*/}
				</div>
				<button className="btn" type="submit" disabled={username === "" || password === ""}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;
