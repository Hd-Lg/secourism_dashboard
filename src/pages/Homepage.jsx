import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { useState } from "react";
const Homepage = () => {
	const [currentUser, setCurrentUser] = useState({});

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setCurrentUser(user);
		}
	});

	const logoutUser = async () => {
		await signOut(auth);
		alert("User signed Out");
	};
	return (
		<div>
			<h3>User Logged In:</h3>
			<p>{currentUser?.email}</p>
			<button onClick={logoutUser}>Sign Out</button>
		</div>
	);
};

export default Homepage;
