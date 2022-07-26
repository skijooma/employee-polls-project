import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import formatTime from "../utils/TimeFormatter";
import BallotBox from "./BallotBox";


export default function QuestionDetailsCard(props) {

	const { question, user } = props;

	return (
		<div>
			<Card sx={{ minWidth: 345 }} className="questionDetailsCard">
				<CardHeader
					avatar={
						<Avatar alt = "{ user && user.name }"
								src = {(user && user.avatarURL) ? user.avatarURL : ""}
								sx={{ bgcolor: red[500] }} aria-label="recipe" />
					}
					title= {user.name}
					subheader= {formatTime(question.timestamp)}
				/>
				<CardContent className="questionDetailsCardContent">
					<Typography variant = "h5" component = "div" align="center">
						{`Would you rather`}
					</Typography>
					<BallotBox question = {question} />
				</CardContent>
			</Card>
		</div>
	);
}
