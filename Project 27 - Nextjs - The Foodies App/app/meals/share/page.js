import Link from 'next/link';

export default function SharePage() {
	return (
		<main>
			<h1>Share page</h1>
			<p>
				<Link href="/meals">Meals page</Link>
			</p>
		</main>
	);
}
