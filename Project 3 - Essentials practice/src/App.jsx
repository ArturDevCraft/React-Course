import { useState } from 'react';
import Header from './components/header';
import UserInput from './components/UserInput';
import Result from './components/Result';

const INITIAL_VALUES = {
	initialInvestment: 10000,
	annualInvestment: 300,
	expectedReturn: 5.5,
	duration: 12,
};

function App() {
	const [inputValues, setInputValues] = useState(INITIAL_VALUES);
	const inputIsValid = inputValues.duration >= 1;
	function handleData(fieldId, value) {
		setInputValues((prevValues) => {
			return {
				...prevValues,
				[fieldId]: parseFloat(value),
			};
		});
	}

	return (
		<>
			<Header />
			<main>
				<UserInput deriveData={handleData} values={inputValues} />
				{!inputIsValid && (
					<p className="center">Please enter a duration grater than zero.</p>
				)}
				{inputIsValid && <Result inputValues={inputValues}></Result>}
			</main>
		</>
	);
}

export default App;
