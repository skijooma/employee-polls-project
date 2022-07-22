import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { handleAnswerQuestion } from "../actions/questions";
import { handleAnswerQuestion } from "../actions/shared";
import getVoteMetrics from "../utils/PollMetrics";

/*
 * 1. Radio buttons for selecting? -> One button for submit?.
 * 2. 2 text views
 * 3. 2 options
 * 4. 2 indicators for votes cast.
 *
 *  */


const BallotBox = (props) => {

	const { authedUser, questions } = useSelector(state => state);
	const dispatch = useDispatch();
	const pollQuestion = props.question;
	const [pollMetrics, setPollMetrics] = useState(getVoteMetrics(pollQuestion));

	useEffect(() => {
		setPollMetrics(getVoteMetrics(pollQuestion));
	}, [pollMetrics])

	const handleVoteClick = (e) => {

		console.log("Vote click => ", e.target.value);
		dispatch(handleAnswerQuestion({
			authedUser,
			qid: props.question.id,
			answer: e.target.value,
		}));
	}

	return (
		<div className = "ballotBox">
			<div className = "ballot">
				<div className = "ballotText">
					<div className = "voteQuestionText">
						<Typography variant = "body2" color = "text.secondary">
							{props.question.optionOne.text}
						</Typography>
					</div>
					{((props.question.optionOne.votes.includes(authedUser)) || (props.question.optionOne.votes.includes(authedUser))) &&
						(<div className = "voteShareMetrics">
							<Typography variant = "body2" color = "text.secondary">
								{`${pollMetrics.optionOnePercentage}% (${pollMetrics.optionOneVoteCount})`}
							</Typography>
						</div>)}
				</div>
				<Button size = "small" onClick = {handleVoteClick} id = "optionOne" value = "optionOne">
					Vote
				</Button>
			</div>

			<div className = "ballot">
				<div className = "ballotText">
					<div className = "voteQuestionText">
						<Typography variant = "body2" color = "text.secondary">
							{props.question.optionTwo.text}
						</Typography>
					</div>
					<div className = "voteShareMetrics">
						<Typography variant = "body2" color = "text.secondary">
							81% (4)
						</Typography>
					</div>
				</div>
				<Button size = "small">
					Vote
				</Button>
			</div>
		</div>
	)
}

export default BallotBox;
