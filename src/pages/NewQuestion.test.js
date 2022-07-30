import { screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { createStore } from "redux";
import middleware from "../middleware";
import reducer from "../reducers";
import NewQuestion from "./NewQuestion";


const store = createStore(reducer, middleware);

describe('New poll creation', () => {
	it('should display error message if poll option is not provided', () => {
		const component = render(
			<MemoryRouter>
				<Provider store = {store}>
					<NewQuestion/>
				</Provider>
			</MemoryRouter>
		);
		const submitButton = component.getByTestId("submit-question");
		fireEvent.click(submitButton);
		expect(screen.getByTestId("poll-error-message")).toBeInTheDocument();
	});
});
