import Helmet from "../../components/Helmet";

const Calendar = () => {
	return (
		<Helmet title={"Calendar"}>
			<div className='mt-10 w-full'>
				<h2 className='text-2xl font-bold underline underline-offset-4'>
					Calendar
				</h2>
				<p className='text-lg text-gray-500'>
					All the events of the organization for the upcoming months.
				</p>
			</div>
		</Helmet>
	);
};

export default Calendar;
