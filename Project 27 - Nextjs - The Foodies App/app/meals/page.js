import Link from 'next/link';

export default function MealsPage() {
	return (
		<main>
			<h1>Meals page</h1>
			<p>
				<Link href="/">Home page</Link>
			</p>
			<p>
				<Link href="meals/share">Share page</Link>
			</p>
		</main>
	);
}
