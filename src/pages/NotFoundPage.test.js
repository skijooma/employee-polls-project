import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "../middleware";
import reducer from "../reducers";
import * as data from "../utils/_DATA";
import NewQuestion from "./NewQuestion";
import App from './NewQuestion';
import NotFoundPage from "./NotFoundPage";


const store = createStore(reducer, middleware);

describe('test saving a question-answer', () => {
	it('Rendered page matches snapshot', () => {
		let view = render(<NotFoundPage/>);
		expect(view).toMatchSnapshot();
	});
});
