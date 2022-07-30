import * as data from "./_DATA";


describe('test saving a question', () => {
	it('should verify that the saved question is returned with all expected fields populated', async () => {
		let question = {
			optionOneText: "Mock option one",
			optionTwoText: "Mock option two",
			author: "Mock author",
		};
		const result = await data._saveQuestion(question);
		expect(result).toEqual(
			expect.objectContaining({
				author: "Mock author",
				optionOne: expect.objectContaining({
					text: "Mock option one",
				}),
				optionTwo: expect.objectContaining({
					text: "Mock option two",
				})
			})
		);
	});

	it("should verify that an error is returned if an invalid question is provided", async() => {
		let question = {
			optionOneText: "Mock option one",
			optionTwoText: "Mock option two",
		};
		await expect(data._saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
	});
});



// test('should contain important value in nested object', () => {
// 	const nestedObject = {
// 		ignore: 'ignore',
// 		payload: {
// 			important: 'important',           ignore: 'ignore',
// 		},
// 	};
//
// 	expect(nestedObject).toEqual(
// 		expect.objectContaining({
// 			payload: expect.objectContaining({
// 				important: 'important',
// 			}),
// 		})
// 	);
// });
