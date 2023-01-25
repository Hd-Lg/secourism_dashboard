import { Helmet } from "../../components";
import ModalTest from "../../components/ModalTest";

const Homepage = () => {
	return (
		<Helmet title={"Home"}>
			<section className='mt-10 w-full'>
				<h1>Test modal</h1>
				<ModalTest />
			</section>
		</Helmet>
	);
};

export default Homepage;
