import EventItem from './event-item';
import classes from './event-list.module.css';

export default function EventList({ items }) {
	const renderedEvents = items.map((event) => (
		<ul
			className={classes.list}
			key={event.id}
		>
			<EventItem {...event} />
		</ul>
	));
	return <ul>{renderedEvents}</ul>;
}
