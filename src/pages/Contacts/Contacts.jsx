import Helmet from "../../components/Helmet";
import ContactTable from "./components/ContactTable";

const Contacts = () => {
	return (
		<Helmet
			title={"Contacts"}
			className='mt-10 w-full'>
			<ContactTable />
		</Helmet>
	);
};

export default Contacts;
