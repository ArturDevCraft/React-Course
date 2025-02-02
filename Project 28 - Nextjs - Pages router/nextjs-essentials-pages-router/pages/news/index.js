import Link from 'next/link';

function NewsPage() {
	return (
		<>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href="/news/some-id">Dummy news</Link>
				</li>
				<li></li>
			</ul>
		</>
	);
}

export default NewsPage;
