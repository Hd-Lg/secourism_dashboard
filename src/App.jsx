import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Administration,
	Calendar,
	Chat,
	Contacts,
	Homepage,
	Inventory,
	Messages,
	Settings,
	Tresorerie,
	UserSignin,
	UserSignup,
} from "./pages";
import { Navbar, ProtectedRoute } from "./components";

const App = () => {
	return (
		<div className='bg-[#F7F7F7] flex'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index path='/' element={<UserSignin />} />
					<Route path='/signup' element={<UserSignup />} />
					<Route
						path='/home'
						element={
							<ProtectedRoute>
								<Homepage />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/calendar'
						element={
							<ProtectedRoute>
								<Calendar />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/contacts'
						element={
							<ProtectedRoute>
								<Contacts />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/messages'
						element={
							<ProtectedRoute>
								<Messages />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/chat'
						element={
							<ProtectedRoute>
								<Chat />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/settings'
						element={
							<ProtectedRoute>
								<Settings />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/inventory'
						element={
							<ProtectedRoute>
								<Inventory />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/tresorerie'
						element={
							<ProtectedRoute>
								<Tresorerie />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/administration'
						element={
							<ProtectedRoute>
								<Administration />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
