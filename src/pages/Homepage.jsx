import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { useState } from "react";
import Navbar from "../components/Navbar";
const Homepage = () => {
	const [currentUser, setCurrentUser] = useState({});
	const d = new Date();
	const date = d.toDateString();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setCurrentUser(user);
		}
	});

	return (
		<div className='flex'>
			<Navbar />
			<div className='ml-6'>
				<div>
					<h3>Today's Plan</h3>
					<p>{date}</p>
				</div>
				<h3>User Logged In:</h3>
				<p>{currentUser?.email}</p>
			</div>
		</div>
	);
};

export default Homepage;
