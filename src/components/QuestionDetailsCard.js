import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import NotFoundPage from "../pages/NotFoundPage";
import formatTime from "../utils/TimeFormatter";
import BallotBox from "./BallotBox";


export default function QuestionDetailsCard(props) {

	const { question, user } = props;

	if (question && user) {
		return (
			<div>
				<Card sx = {{ minWidth: 345 }} className = "questionDetailsCard">
					<CardHeader
						avatar = {
							<Avatar alt = "{ user && user.name }"
									src = {(user && user.avatarURL) ? user.avatarURL : ""}
									sx = {{ bgcolor: red[500] }} aria-label = "recipe"/>
						}
						title = {user.name}
						subheader = {formatTime(question.timestamp)}
					/>
					<CardContent className = "questionDetailsCardContent">
						<Typography variant = "h5" component = "div" align = "center">
							{`Would you rather`}
						</Typography>
						<BallotBox question = {question}/>
					</CardContent>
				</Card>
			</div>
		);
	} else {
		return (
			<NotFoundPage/>
		);
	}
}
