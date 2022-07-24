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
import BallotBox from "./BallotBox";


export default function QuestionDetailsCard(props) {

	return (
		<div className="questionDetailsCard">
			<Card sx={{ minWidth: 345 }}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
							R
						</Avatar>
					}
					title= {props.user.name}
					subheader="September 14, 2016"
				/>
				<CardContent>
					<BallotBox question = {props.question}/>
				</CardContent>
			</Card>
		</div>
	);
}