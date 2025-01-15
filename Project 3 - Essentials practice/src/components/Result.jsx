import { formatter } from '../util/investment';
import { calculateInvestmentResults } from '../util/investment';
export default function Result({ inputValues }) {
	const calculatedValues = calculateInvestmentResults(inputValues);
	const initialInvestment =
		calculatedValues[0].valueEndOfYear -
		calculatedValues[0].interest -
		calculatedValues[0].annualInvestment;
	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{calculatedValues.map((val, index) => {
					const totalInterest =
						val.valueEndOfYear -
						val.annualInvestment * val.year -
						initialInvestment;
					return (
						<tr key={val.year}>
							<td>{val.year}</td>
							<td>{formatter.format(val.valueEndOfYear)}</td>
							<td>{formatter.format(val.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(val.valueEndOfYear - totalInterest)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
