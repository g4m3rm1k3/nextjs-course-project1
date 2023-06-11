import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

export default function FilteredEventsPage() {
	const router = useRouter();
	const filteredData = router.query.slug;
	if (!filteredData) {
		return <p className='center'>Loading</p>;
	}
	const year = +filteredData[0];
	const month = +filteredData[1];
	if (
		isNaN(month) ||
		isNaN(year) ||
		year > 2030 ||
		year < 2021 ||
		month < 1 ||
		month > 12
	) {
		return <p>Nope</p>;
	}
	const events = getFilteredEvents({ year, month });
	console.log(events);
	if (!events) {
		return <p>No events found</p>;
	}
	return (
		<div>
			<h1>Filtered Events</h1>
			<EventList items={events} />
		</div>
	);
}
