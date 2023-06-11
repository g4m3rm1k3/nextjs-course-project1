import Link from 'next/link';
import classes from './button.module.css';

export default function Button({ link, children, onClick }) {
	if (link) {
		return (
			<Link
				href={link}
				className={classes.btn}
			>
				{children}
			</Link>
		);
	} else {
		return (
			<button
				className={classes.btn}
				onClick={onClick}
			>
				{' '}
				{children}
			</button>
		);
	}
}
