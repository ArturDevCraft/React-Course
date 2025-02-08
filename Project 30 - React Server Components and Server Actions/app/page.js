import ClientDemo from '@/Components/ClientDemo';
import RSCDemo from '@/Components/RSCDemo';

export default function Home() {
	return (
		<main>
			<RSCDemo />
			<ClientDemo>
				<RSCDemo />
			</ClientDemo>
		</main>
	);
}
