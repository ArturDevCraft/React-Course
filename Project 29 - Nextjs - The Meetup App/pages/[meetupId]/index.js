import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
			title="A first meetup"
			address="Some address 5, 12345 Some City"
			description="This is a first meetup!"
		/>
	);
}

export default MeetupDetails;
