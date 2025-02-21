import { createContext, ReactNode, useState } from 'react';
import Todo from '../models/todo';
import Todos from '../components/Todos';

type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: ReactNode }> = (props) => {
	const [items, setItems] = useState<Todo[]>([]);

	const addTodo = (todoText: string) => {
		const newTodo = new Todo(todoText);

		setItems((prevItems) => {
			return prevItems.concat(newTodo);
		});
	};

	const removeTodo = (id: string) => {
		setItems((prevItems) => {
			return prevItems.filter((todo) => todo.id !== id);
		});
	};

	const ctxValue: TodosContextObj = { items, addTodo, removeTodo };

	return (
		<TodosContext.Provider value={ctxValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
