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
	}, [pollMetrics]);

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
			<div className = {((pollQuestion.optionOne.votes.includes(authedUser)) || (pollQuestion.optionOne.votes.includes(authedUser))) ? "ballotVoted" : "ballot"}>
				<div className = "ballotText">
					<div className = "voteQuestionText">
						<Typography variant = "body2" color = "text.secondary">
							{pollQuestion.optionOne.text}
						</Typography>
					</div>

					{((pollQuestion.optionOne.votes.includes(authedUser)) || (pollQuestion.optionOne.votes.includes(authedUser))) &&
						(<div className = "voteShareMetrics">
							<Typography variant = "body2" color = "text.secondary">
								{` ${pollMetrics.optionOnePercentage}% (${pollMetrics.optionOneVoteCount})`}
							</Typography>
						</div>)}
				</div>
				<Button size = "medium" color = "secondary" onClick = {handleVoteClick} id = "optionOne" value = "optionOne">
					{((pollQuestion.optionOne.votes.includes(authedUser)) || (pollQuestion.optionOne.votes.includes(authedUser)))?
						"Voted":
						"Vote"}
				</Button>
			</div>

			<div className = {((pollQuestion.optionTwo.votes.includes(authedUser)) || (pollQuestion.optionTwo.votes.includes(authedUser))) ? "ballotVoted" : "ballot"}>
				<div className = "ballotText">
					<div className = "voteQuestionText">
						<Typography variant = "body2" color = "text.secondary">
							{props.question.optionTwo.text}
						</Typography>
					</div>

					{((pollQuestion.optionTwo.votes.includes(authedUser)) || (pollQuestion.optionTwo.votes.includes(authedUser))) &&
						(<div className = "voteShareMetrics">
							<Typography variant = "body2" color = "text.secondary">
								{` ${pollMetrics.optionTwoPercentage}% (${pollMetrics.optionTwoVoteCount})`}
							</Typography>
						</div>)}
				</div>
				<Button size = "small" onClick = {handleVoteClick} id = "optionTwo" value = "optionTwo">
					{((pollQuestion.optionTwo.votes.includes(authedUser)) || (pollQuestion.optionTwo.votes.includes(authedUser)))?
						"Voted":
						"Vote"}
				</Button>
			</div>
		</div>
	)
}

export default BallotBox;
