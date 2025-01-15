import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetail from './pages/ProductDetail';

// Different way of defining routes
// const routeDefinitions = createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<HomePage />} />
// 		<Route path="/products" element={<ProductsPage />} />
// 	</Route>
// );

// const router = createBrowserRouter(routeDefinitions);

// newer way of defining routs
const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> }, //index: true, is alternative for: path: ''
			{ path: 'products', element: <ProductsPage /> },
			{ path: 'products/:productId', element: <ProductDetail /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
