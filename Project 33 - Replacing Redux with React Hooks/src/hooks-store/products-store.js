import { initStore } from './store';

const configureStore = () => {
	const actions = {
		TOGGLE_FAV: (curState, id) => {
			const indexEditingProduct = curState.products.findIndex(
				(item) => item.id === id
			);

			const updatedProductFavStatus =
				!curState.products[indexEditingProduct].isFavorite;

			const updatedProducts = [...curState.products];

			updatedProducts[indexEditingProduct] = {
				...curState.products[indexEditingProduct],
				isFavorite: updatedProductFavStatus,
			};
			return { products: updatedProducts };
		},
	};

	initStore(actions, {
		products: [
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
		],
	});
};

export default configureStore;
