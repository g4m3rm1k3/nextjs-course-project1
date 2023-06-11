import { useRef } from 'react';

import Button from '../../components/ui/button';
import classes from './events-search.module.css';

export default function EventSearch({ onSearch }) {
	const yearInputRef = useRef();
	const monthInputRef = useRef();
	function submitHandler(e) {
		e.preventDefault();
		onSearch(yearInputRef.current.value, monthInputRef.current.value);
	}
	return (
		<form
			className={classes.form}
			onSubmit={submitHandler}
		>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor='year'>Year</label>
					<select
						ref={yearInputRef}
						name=''
						id='year'
					>
						<option value='2021'>2021</option>
						<option value='2022'>2022</option>
					</select>
				</div>
			</div>
			<div className={classes.control}>
				<label htmlFor='month'>Month</label>
				<select
					ref={monthInputRef}
					name='Month'
					id='month'
				>
					<option value='1'>January</option>
					<option value='2'>February</option>
					<option value='3'>March</option>
					<option value='4'>April</option>
					<option value='5'>May</option>
					<option value='6'>June</option>
					<option value='7'>July</option>
					<option value='8'>August</option>
					<option value='9'>september</option>
					<option value='10'>October</option>
					<option value='11'>November</option>
					<option value='12'>December</option>
				</select>
			</div>
			<Button>Find Events</Button>
		</form>
	);
}
