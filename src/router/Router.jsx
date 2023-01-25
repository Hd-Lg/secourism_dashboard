import { Routes, Route } from "react-router-dom";
import {
	Administration,
	Calendar,
	Social,
	Contacts,
	Homepage,
	Inventory,
	Messages,
	Settings,
	Tresorerie,
	UserSignin,
	UserSignup,
} from "../pages";

const Router = () => {
	return (
		<Routes>
			<Route
				index
				path='/'
				element={<UserSignin />}
			/>
			<Route
				path='/signup'
				element={<UserSignup />}
			/>
			<Route
				path='/home'
				element={<Homepage />}
			/>
			<Route
				path='/calendar'
				element={<Calendar />}
			/>
			<Route
				path='/contacts'
				element={<Contacts />}
			/>
			<Route
				path='/messages'
				element={<Messages />}
			/>
			<Route
				path='/social'
				element={<Social />}
			/>
			<Route
				path='/settings'
				element={<Settings />}
			/>
			<Route
				path='/inventory'
				element={<Inventory />}
			/>
			<Route
				path='/tresorerie'
				element={<Tresorerie />}
			/>
			<Route
				path='/administration'
				element={<Administration />}
			/>
		</Routes>
	);
};

export default Router;
