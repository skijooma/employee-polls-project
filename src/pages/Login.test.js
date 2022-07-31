import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { createStore } from "redux";
import middleware from "../middleware";
import reducer from "../reducers";
import Login from "./Login";


const store = createStore(reducer, middleware);

describe('Login page', () => {
	it('should verify if the username & password fields, and submit button are present', () => {

		const component = render(
			<MemoryRouter>
				<Provider store = {store}>
					<Login/>
				</Provider>
			</MemoryRouter>
		);
		expect(screen.getByTestId("username")).toBeInTheDocument();
		expect(screen.getByTestId("password")).toBeInTheDocument();
		expect(screen.getByTestId("login-button")).toBeInTheDocument();
	});
});
