import { useMutation, useQuery } from '@tanstack/react-query';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {
	const { id } = useParams();
	const navigate = useNavigate();

	const {
		mutate,
		isPending: isDeletePending,
		isError: isDeleteError,
		error: deleteError,
	} = useMutation({
		mutationFn: deleteEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['events'],
				refetchType: 'none',
			});
			navigate('/events');
		},
	});

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['events', id],
		queryFn: ({ signal }) => fetchEvent({ id, signal }),
	});

	function handleDelete() {
		mutate({ id });
	}

	return (
		<>
			<Outlet />
			<Header>
				<Link to="/events" className="nav-item">
					View all Events
				</Link>
			</Header>
			{isPending && <LoadingIndicator />}
			{isDeletePending && <LoadingIndicator />}

			{isError && (
				<ErrorBlock
					title="An error occured"
					message={error.info?.message || 'Failed to fetch event details data.'}
				/>
			)}

			{isDeleteError && (
				<ErrorBlock
					title="An error occured"
					message={deleteError.info?.message || 'Failed to delete event.'}
				/>
			)}
			{data && (
				<article id="event-details">
					<header>
						<h1>{data.title}</h1>
						<nav>
							<button onClick={handleDelete} disabled={isPending}>
								{isDeletePending ? 'Deleting...' : 'Delete'}
							</button>
							<Link to="edit">Edit</Link>
						</nav>
					</header>
					<div id="event-details-content">
						<img src={`http://localhost:3000/${data.image}`} alt={data.title} />
						<div id="event-details-info">
							<div>
								<p id="event-details-location">{data.location}</p>
								<time dateTime={`${data.date}$${data.time}`}>
									{data.date} {data.time}
								</time>
							</div>
							<p id="event-details-description">{data.description}</p>
						</div>
					</div>
				</article>
			)}
		</>
	);
}
