import { useSelector } from "react-redux";
import QuestionSummaryCard from "./QuestionSummaryCard";


const QuestionsList = (props) => {

	console.log("Questions in QList => ", props.questions);

	return (
		<div className="questionsContainer">
			{/*{ questions.map((question) => {*/}
			{/*	return (<QuestionSummaryCard key={question.id} question = {question} />)*/}
			{/*})}*/}
			{/*Questions List*/}

			{ Object.keys(props.questions).map((id) => (
				<QuestionSummaryCard key={id} question = {props.questions[id]} />
			))}
		</div>
	)
}

export default QuestionsList;
