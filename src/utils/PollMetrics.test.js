import getVoteMetrics from "./PollMetrics";


describe('test poll metrics', () => {
	it('should verify that poll metrics are accurate', () => {
		let pollQ = {
			id: '8xf0y6ziyjabvozdd253nd',
			author: 'sarahedo',
			timestamp: 1467166872634,
			optionOne: {
				votes: ['sarahedo'],
				text: 'Build our new application with Javascript',
			},
			optionTwo: {
				votes: [],
				text: 'Build our new application with Typescript'
			}
		};
		const voteMetrics = getVoteMetrics(pollQ);
		const totalPercentage = voteMetrics.optionOnePercentage + voteMetrics.optionTwoPercentage;
		expect(totalPercentage).toEqual(100);
	});
});
