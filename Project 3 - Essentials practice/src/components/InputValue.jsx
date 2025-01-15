export default function InputValue({
	fieldId,
	children,
	onChange,
	initialValue,
}) {
	function handleChange(e) {
		onChange(fieldId, e.target.value);
	}
	return (
		<p>
			<label htmlFor={fieldId}>{children}</label>
			<input
				type="number"
				id={fieldId}
				value={initialValue}
				onChange={handleChange}
				required
			/>
		</p>
	);
}
