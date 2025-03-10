import { createContext, useContext } from 'react';

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
	const ctx = useContext(AccordionItemContext);
	if (!ctx) {
		throw new Error(
			'AccordionItem-related component must be wrapped by <Accordion.Item>.'
		);
	}
	return ctx;
}

export default function AccordionItem({ id, className, children }) {
	return (
		<li className={className}>
			<AccordionItemContext.Provider value={id}>
				{children}
			</AccordionItemContext.Provider>
		</li>
	);
}
