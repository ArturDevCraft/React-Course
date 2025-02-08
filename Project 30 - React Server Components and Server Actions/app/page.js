import UsePromiseDemo from '@/Components/UsePromisesDemo';
import { Suspense } from 'react';

export default async function Home() {
	return (
		<main>
			<Suspense fallback={<p>Loading...</p>}>
				<UsePromiseDemo />
			</Suspense>
		</main>
	);
}
