import { useMutation, useQuery } from '@tanstack/react-query';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

import Header from '../Header.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
	const [isDeleting, setIsDeleting] = useState(false);

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

	function handleStartDelete() {
		setIsDeleting(true);
	}

	function handleStopDelete() {
		setIsDeleting(false);
	}

	function handleDelete() {
		mutate({ id });
	}

	return (
		<>
			{isDeleting && (
				<Modal onClose={handleStopDelete}>
					<h2>Are you sure?</h2>
					<p>
						Do you really want to delete this event? This action cannot be
						undone.
					</p>
					<div className="form-actions">
						{isDeletePending && <p>Deleting, please wait...</p>}
						{!isDeletePending && (
							<>
								<button onClick={handleStopDelete} className="button-text">
									Cancel
								</button>
								<button onClick={handleDelete} className="button">
									Delete
								</button>
							</>
						)}
						{isDeleteError && (
							<ErrorBlock
								title="An error occured"
								message={deleteError.info?.message || 'Failed to delete event.'}
							/>
						)}
					</div>
				</Modal>
			)}

			<Outlet />
			<Header>
				<Link to="/events" className="nav-item">
					View all Events
				</Link>
			</Header>
			{isPending && <LoadingIndicator />}

			{isError && (
				<ErrorBlock
					title="An error occured"
					message={error.info?.message || 'Failed to fetch event details data.'}
				/>
			)}

			{data && (
				<article id="event-details">
					<header>
						<h1>{data.title}</h1>
						<nav>
							<button onClick={handleStartDelete} disabled={isPending}>
								{isDeletePending ? 'Deleting...' : 'Delete'}
							</button>
							<Link to="edit">Edit</Link>
						</nav>
					</header>
					<div id="event-details-content">
						<img
							src={`https://react-course-project-25.onrender.com/${data.image}`}
							alt={data.title}
						/>
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
