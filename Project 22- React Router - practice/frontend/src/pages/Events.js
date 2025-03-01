import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
	const { events } = useLoaderData();

	return (
		<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading... </p>}>
			<Await resolve={events}>
				{(loadedEvents) => <EventsList events={loadedEvents} />}
			</Await>
		</Suspense>
	);
}

export default EventsPage;

async function loadEvents() {
	const response = await fetch(
		'https://react-course-project-22-backend.onrender.com/events'
	);

	if (!response.ok) {
		// return { isError: true, message: 'Could not fetch events.' };
		throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
			status: 500,
		});
	} else {
		const resData = await response.json();
		return resData.events;
	}
}

export function loader() {
	return {
		events: loadEvents(),
	};
}

//react router version below 7 needs to import defer and in loader function should look like that:
// export async function loader() {
// 	return defer({
// 	  events: loadEvents(),
// 	});
//   }
