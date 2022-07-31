import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { createStore } from "redux";
import middleware from "../middleware";
import reducer from "../reducers";
import Nav from "./Nav";


const store = createStore(reducer, middleware);

describe('Navigation bar', () => {
	it('should test all navigation links are present in the nav bar', () => {
		const component = render(
			<MemoryRouter>
				<Provider store = {store}>
					<Nav/>
				</Provider>
			</MemoryRouter>
		);
		const navigationLinks = component.getAllByRole("link");
		expect(navigationLinks.length).toEqual(4);
	});

	it('should test user display name is not present in nav. bar, if user is not logged in', () => {
		const component = render(
			<MemoryRouter>
				<Provider store = {store}>
					<Nav/>
				</Provider>
			</MemoryRouter>
		);
		const userDisplayName = screen.queryByTestId("display-name");
		expect(userDisplayName).not.toBeInTheDocument();
	});
});
