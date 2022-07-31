import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../App.css";


const Leaderboard = () => {

	const { questions, users, loading, authedUser } = useSelector(state => state);

	/* Local state variables */
	const [authenticated, setAuthenticated] = useState(null);

	useEffect(() => {
		if (authedUser) {
			setAuthenticated(authedUser);
		}
	}, [authedUser]);

	return (
		<div className = "leaderboard">
			{Object.keys(users)
				.sort((a, b) => (Object.keys(users[b].questions).length < Object.keys(users[a].questions).length ? -1 : Object.keys(users[b].questions).length === Object.keys(users[a].questions).length ? Object.keys(users[b].answers).length - Object.keys(users[a].answers).length : 1))
				.map((id) => (
					<div>
						<ListItem alignItems = "flex-start" className = "leaderboardListItem">
							<ListItemAvatar>
								<Avatar alt = "{ users[id] && users[id].name }"
										src = {(users[id] && users[id].avatarURL) ? users[id].avatarURL : ""}
										sx = {{ bgcolor: red[500] }} aria-label = "recipe"/>
							</ListItemAvatar>

							<ListItemText
								primary = {users[id].name}
								secondary = {
									<div className = "leaderboardListItemTypography">
										<Fragment>
											<Typography
												sx = {{ display: 'inline' }}
												component = "span"
												variant = "body2"
												color = "text.primary"
											>
												{`Created: ${Object.keys(users[id].questions).length}`}
											</Typography>
										</Fragment>

										<Fragment>
											<Typography
												sx = {{ display: 'inline' }}
												component = "span"
												variant = "body2"
												color = "text.primary"
											>
												{`Answered: ${Object.keys(users[id].answers).length}`}
											</Typography>
										</Fragment>
									</div>
								}
							/>
						</ListItem>
					</div>
				))}
		</div>
	);

};

export default Leaderboard;
