import Router from "../router/Router";
import Navbar from "./Navbar";

const Layout = () => {
	return (
		<div className='flex'>
			<Navbar />
			<div>
				<Router />
			</div>
		</div>
	);
};

export default Layout;
