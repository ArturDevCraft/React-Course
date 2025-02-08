import UsePromiseDemo from '@/Components/UsePromisesDemo';
import { Suspense } from 'react';
import fs from 'node:fs/promises';
import ErrorBoundary from '@/Components/ErrorBoundary';

export default async function Home() {
	const fetchUserPromise = new Promise((resolve, reject) =>
		setTimeout(async () => {
			const data = await fs.readFile('dummy-db.json', 'utf-8');
			const users = JSON.parse(data);
			// resolve(users);
			reject(new Error('Error'));
		}, 2000)
	);
	return (
		<main>
			<ErrorBoundary fallback={<p>Something went wrong!</p>}>
				<Suspense fallback={<p>Loading...</p>}>
					<UsePromiseDemo userPromise={fetchUserPromise} />
				</Suspense>
			</ErrorBoundary>
		</main>
	);
}
