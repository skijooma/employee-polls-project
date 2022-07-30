import { Alert, FormControl, Snackbar, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleAddQuestion } from "../actions/questions";


const NewQuestion = () => {

	const navigate = useNavigate();
	const { authedUser } = useSelector(state => state)
	const dispatch = useDispatch();
	const [optionOneText, setOptionOneText] = useState("");
	const [optionTwoText, setOptionTwoText] = useState("");
	const [pollError, setPollError] = useState(false);

	/* Local state variables */
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		if (authedUser) {
			setAuthenticated(true);
			console.log("AUTHENTICATION STATE IN ADD => ", authenticated, " ", authedUser)
		}
	}, [authedUser, authenticated]);

	const handleOptionOneChange = (e) => {
		const value = e.target.value;

		console.log(value);
		setOptionOneText(value)
	};

	const handleOptionTwoChange = (e) => {
		const value = e.target.value;

		console.log(value);
		setOptionTwoText(value)
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// TODO: Add Question to store.

		if (optionOneText !== "" && optionTwoText !== "") {
			console.log("optionOneText: ", optionOneText);
			console.log("optionTwoText: ", optionTwoText);

			dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser));

			/* Reset form values and redirect user to the questions page. */
			setOptionOneText("");
			setOptionTwoText("");
			navigate('/home');
		} else {
			setPollError(true);
		}
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setPollError(false);
	};

	const optionOneCharactersLeft = 100 - optionOneText.length;
	const optionTwoCharactersLeft = 100 - optionTwoText.length;

	return (
		<div className = "newQuestionContainer">
			<h3 className = "center">Pose a question</h3>
			<form className = "newQuestionForm" onSubmit = {handleSubmit}>
				{/* TODO: Redirect to / if submitted */}

				<FormControl fullWidth sx = {{ m: 1 }} variant = "standard">
					<TextField id = "option-one" label = "Option one" variant = "outlined" value = {optionOneText}
							   maxLength = {100} onChange = {handleOptionOneChange}/>
					{optionOneCharactersLeft <= 50 &&
						<div className = "option-text-length">{optionOneCharactersLeft}</div>}
				</FormControl>

				<FormControl fullWidth sx = {{ m: 1 }} variant = "standard">
					<TextField id = "option-one" label = "Option two" variant = "outlined" value = {optionTwoText}
							   maxLength = {100} onChange = {handleOptionTwoChange}/>
					{optionTwoCharactersLeft <= 50 &&
						<div className = "option-text-length">{optionTwoCharactersLeft}</div>}
				</FormControl>

				<button className = "btn " type = "submit" size = "medium" color = "secondary"
						data-testid="submit-question">
					Submit
				</button>
			</form>
			<Snackbar open = {pollError} autoHideDuration = {6000} onClose = {handleClose} data-testid="poll-error-message">
				<Alert onClose = {handleClose} severity = "error" sx = {{ width: '100%' }} >
					Please provide both choice options for the question!
				</Alert>
			</Snackbar>
		</div>
	);
};

export default NewQuestion;
