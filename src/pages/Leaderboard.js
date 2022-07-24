import { ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import "../App.css";


const Leaderboard = () => {

	const { questions, users, loading, authedUser } = useSelector(state => state);

	/* Local state variables */
	const [authenticated, setAuthenticated] = useState(null);

	useEffect(() => {
		if (authedUser) {
			setAuthenticated(authedUser);
			console.log("AUTHENTICATION STATE IN LEADERBOARD => ", authenticated, " ", authedUser);
		}
	}, [authedUser]);

	if (authenticated) {
		return (
			<div>
				{Object.keys(users)
					.sort((a, b) => (Object.keys(users[b].questions).length < Object.keys(users[a].questions).length ? -1 : Object.keys(users[b].questions).length === Object.keys(users[a].questions).length ? Object.keys(users[b].answers).length - Object.keys(users[a].answers).length : 1))
					.map((id) => (
						<div>
							<ListItem alignItems = "flex-start">
								<ListItemText
									primary = {users[id].name}
									secondary = {
										<div>
											<Fragment>
												<Typography
													sx = {{ display: 'inline' }}
													component = "span"
													variant = "body2"
													color = "text.primary"
												>
													Created:
												</Typography>
												{` ${Object.keys(users[id].questions).length}`}
											</Fragment>

											<Fragment>
												<Typography
													sx = {{ display: 'inline' }}
													component = "span"
													variant = "body2"
													color = "text.primary"
												>
													Answered:
												</Typography>
												{` ${Object.keys(users[id].answers).length}`}
											</Fragment>
										</div>
									}
								/>
							</ListItem>
						</div>
					))}
			</div>
		);
	}

	return (
		<Navigate to = '/login' />
	)
};

export default Leaderboard;
