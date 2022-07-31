import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import formatTime from "../utils/TimeFormatter";


export default function QuestionSummaryCard(props) {

	const { question } = props;

	return (
		<Box sx = {{ minWidth: 275 }} className = "questionSummaryBox">
			<Card variant = "outlined" className = "questionSummaryCard">
				<Fragment>
					<CardContent>
						<Typography variant = "h5" component = "div">
							{question.author}
						</Typography>
						<Typography sx = {{ mb: 1.5 }} color = "text.secondary">
							{formatTime(question.timestamp)}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size = "medium" color = "secondary" fullWidth>
							<Link to = {`/questions/${question.id}`}>Show</Link>
						</Button>
					</CardActions>
				</Fragment>
			</Card>
		</Box>
	);
}
