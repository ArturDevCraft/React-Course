import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders Hellow World as a text', () => {
		//Arrange
		render(<Greeting />);

		//Act
		// ... nothing

		//Assert
		const helloWorldElement = screen.getByText('Hello World', { exact: false });
		expect(helloWorldElement).toBeInTheDocument();
	});

	test("render It'is good to see you if the button was NOT clicked", () => {
		render(<Greeting />);

		const seeYouElement = screen.getByText("It'is good to see you", {
			exact: false,
		});
		expect(seeYouElement).toBeInTheDocument();
	});

	test('renders "Cahnged!" if the button was clicked', () => {
		render(<Greeting />);
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		const changedElement = screen.getByText('changed', { exact: false });

		expect(changedElement).toBeInTheDocument();
	});

	test('does NOT render "good to see you!" if the button was clicked', () => {
		render(<Greeting />);
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		const seeYouElement = screen.queryByText("It'is good to see you", {
			exact: false,
		});

		expect(seeYouElement).toBeNull();
	});
});
