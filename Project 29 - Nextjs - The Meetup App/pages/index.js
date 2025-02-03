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
function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
}

//getStaticProps is used during build process to fetch data and generate static page
export async function getStaticProps() {
	//fetch data from an API
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		revalidate: 10, //how often (seconds) data will be refetched (and page regenereted with new data)
	};
}

export default HomePage;
