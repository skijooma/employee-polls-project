export default function getVoteMetrics(pollQuestion) {

	const optionOneVoteCount = pollQuestion.optionOne.votes.length;
	const optionTwoVoteCount = pollQuestion.optionTwo.votes.length;
	const totalVoteCount = optionOneVoteCount + optionTwoVoteCount;
	const optionOnePercentage = Math.floor((optionOneVoteCount / totalVoteCount) * 100);
	const optionTwoPercentage = Math.floor((optionTwoVoteCount / totalVoteCount) * 100);

	return {
		optionOneVoteCount,
		optionTwoVoteCount,
		optionOnePercentage,
		optionTwoPercentage,
	}
}
