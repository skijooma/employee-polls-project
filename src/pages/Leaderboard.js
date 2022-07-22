import "../App.css";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import QuestionSummaryCard from "../components/QuestionSummaryCard";
import { ListItem, ListItemText } from "@mui/material";
import { Fragment } from "react";


const Leaderboard = () => {

	const { questions, users, loading, authedUser } = useSelector(state => state);

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
};

export default Leaderboard;
