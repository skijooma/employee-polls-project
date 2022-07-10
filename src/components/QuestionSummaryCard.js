//
// const QuestionSummaryCard = () => {
//
// 	return (
// 		<div>
//
// 		</div>
// 	)
// }
//
// export default QuestionSummaryCard;


import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
	<Fragment>
		<CardContent>
			<Typography variant="h5" component="div">
				sarahedo
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.secondary">
				adjective
			</Typography>
			<Typography variant="body2">
				well meaning and kindly.
				<br />
				{'"a benevolent smile"'}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small">Show</Button>
		</CardActions>
	</Fragment>
);

export default function QuestionSummaryCard() {
	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant="outlined">{card}</Card>
		</Box>
	);
}
