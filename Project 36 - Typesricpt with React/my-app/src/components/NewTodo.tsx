import { text } from 'node:stream/consumers';
import { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		if (enteredText.trim().length === 0) {
			// throw an error
			return;
		}

		props.onAddTodo(enteredText);

		if (textInputRef.current) {
			textInputRef.current.value = '';
		}
	};
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={textInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
