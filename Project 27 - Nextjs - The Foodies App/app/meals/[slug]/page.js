import Link from 'next/link';

export default function MealDetailPage({ params }) {
	return (
		<main>
			<h1>Meal details</h1>
			<h2>{params.slug}</h2>
			<p>
				<Link href="/">Home page</Link>
			</p>
			<p>
				<Link href="meals/share">Share page</Link>
			</p>
		</main>
	);
}
