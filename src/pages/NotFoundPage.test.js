import { render } from '@testing-library/react';
import { createStore } from "redux";
import middleware from "../middleware";
import reducer from "../reducers";
import NotFoundPage from "./NotFoundPage";


const store = createStore(reducer, middleware);

describe('test saving a question-answer', () => {
	it('Rendered page matches snapshot', () => {
		let view = render(<NotFoundPage/>);
		expect(view).toMatchSnapshot();
	});
});
