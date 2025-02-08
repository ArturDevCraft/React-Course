import UsePromiseDemo from '@/Components/UsePromisesDemo';
import { Suspense } from 'react';
import fs from 'node:fs/promises';

export default async function Home() {
	const fetchUserPromise = new Promise((resolve) =>
		setTimeout(async () => {
			const data = await fs.readFile('dummy-db.json', 'utf-8');
			const users = JSON.parse(data);
			resolve(users);
		}, 2000)
	);
	return (
		<main>
			<Suspense fallback={<p>Loading...</p>}>
				<UsePromiseDemo userPromise={fetchUserPromise} />
			</Suspense>
		</main>
	);
}
