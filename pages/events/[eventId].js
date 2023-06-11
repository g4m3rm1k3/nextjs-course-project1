import { Fragment } from 'react';
import { useRouter } from 'next/router';
import EventSummary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import { getEventById } from '../../dummy-data';
export default function EventDetailPage() {
	const router = useRouter();
	const eventId = router.query.eventId;
	if (!eventId) {
		return <p>No event found!</p>;
	}
	const { title, date, location, image, description } = getEventById(eventId);

	return (
		<Fragment>
			<EventSummary title={title} />
			<EventLogistics
				{...{ date, image, address: location, imageAlt: title }}
			/>
			<EventContent>
				<p>{description}</p>
			</EventContent>
		</Fragment>
	);
}
