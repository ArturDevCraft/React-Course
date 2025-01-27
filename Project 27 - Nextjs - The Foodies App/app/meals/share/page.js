import Link from 'next/link';

export default function ShareMealPage() {
	return (
		<main>
			<h1>Share meal page</h1>
			<p>
				<Link href="/meals">Meals page</Link>
			</p>
		</main>
	);
}
