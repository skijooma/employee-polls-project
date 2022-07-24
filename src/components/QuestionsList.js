import { useSelector } from "react-redux";
import QuestionSummaryCard from "./QuestionSummaryCard";


const QuestionsList = (props) => {

	const { questions } = props;

	return (
		<div className="questionsContainer">
			{ Object.keys(questions).map((id) => (
				<QuestionSummaryCard key={id} question = {questions[id]} />
			))}
		</div>
	)
}

export default QuestionsList;
