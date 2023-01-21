const Date = () => {
	const d = new Date();
	const date = d.toDateString();
	return (
		<>
			<h3 className='font-bold text-2xl'>Today's Plan</h3>
			<p className='text-primary'>{date}</p>
		</>
	);
};

export default Date;
