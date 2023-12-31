import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

import classes from './event-item.module.css';

export default function EventItem({ image, date, title, location, id }) {
	return (
		<li className={classes.item}>
			<img
				src={'/' + image}
				alt={title}
			/>
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						{new Date(date).toLocaleDateString('en-US', {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						})}
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{location.replace(',', '\n')}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={`/events/${id}`}>
						<span>Explore Event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}
