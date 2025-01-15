import InputValue from './InputValue';

export default function UserInput({ deriveData, values }) {
	return (
		<section id="user-input">
			<div className="input-group">
				<InputValue
					fieldId="initialInvestment"
					onChange={deriveData}
					initialValue={values.initialInvestment}
				>
					Initial investment
				</InputValue>
				<InputValue
					fieldId="annualInvestment"
					onChange={deriveData}
					initialValue={values.annualInvestment}
				>
					Annual investment
				</InputValue>
			</div>

			<div className="input-group">
				<InputValue
					fieldId="expectedReturn"
					onChange={deriveData}
					initialValue={values.expectedReturn}
				>
					Expected return
				</InputValue>
				<InputValue
					fieldId="duration"
					onChange={deriveData}
					initialValue={values.duration}
				>
					Duration
				</InputValue>
			</div>
		</section>
	);
}
