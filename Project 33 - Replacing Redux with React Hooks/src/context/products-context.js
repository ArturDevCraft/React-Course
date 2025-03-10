import { createContext, useState } from 'react';

export const ProductsContext = createContext({
	products: [],
	toggleFav: () => {},
});

export default (props) => {
	const [productsList, setProductsList] = useState([
		{
			id: 'p1',
			title: 'Red Scarf',
			description: 'A pretty red scarf.',
			isFavorite: false,
		},
		{
			id: 'p2',
			title: 'Blue T-Shirt',
			description: 'A pretty blue t-shirt.',
			isFavorite: false,
		},
		{
			id: 'p3',
			title: 'Green Trousers',
			description: 'A pair of lightly green trousers.',
			isFavorite: false,
		},
		{
			id: 'p4',
			title: 'Orange Hat',
			description: 'Street style! An orange hat.',
			isFavorite: false,
		},
	]);

	const handleToggleFav = (id) => {
		const indexEditingProduct = productsList.findIndex(
			(item) => item.id === id
		);

		const updatedProductFavStatus =
			!productsList[indexEditingProduct].isFavorite;

		setProductsList((prev) => {
			const updatedProducts = [...prev];
			updatedProducts[indexEditingProduct] = {
				...prev[indexEditingProduct],
				isFavorite: updatedProductFavStatus,
			};
			return updatedProducts;
		});
	};

	return (
		<ProductsContext.Provider
			value={{ products: productsList, toggleFav: handleToggleFav }}
		>
			{props.children}
		</ProductsContext.Provider>
	);
};
