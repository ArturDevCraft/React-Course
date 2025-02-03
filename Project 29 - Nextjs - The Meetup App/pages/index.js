import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A first meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address 5, 12345 Some City',
		description: 'This is a first meetup!',
	},
	{
		id: 'm2',
		title: 'A second meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address 15, 12345 Some City',
		description: 'This is a second meetup!',
	},
	{
		id: 'm3',
		title: 'A third meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address 25, 12345 Some City',
		description: 'This is a third meetup!',
	},
];
function HomePage() {
	return (
		<Layout>
			<MeetupList meetups={DUMMY_MEETUPS} />;
		</Layout>
	);
}

export default HomePage;
