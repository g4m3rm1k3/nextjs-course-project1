import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from './events-search';

export default function AllEventsPage() {
	const router = useRouter();
	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}
	const events = getAllEvents();
	return (
		<Fragment>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</Fragment>
	);
}
