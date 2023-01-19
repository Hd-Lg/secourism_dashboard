import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, UserSignin, UserSignup } from "./pages";
import { ProtectedRoute } from "./components";

const App = () => {
	return (
		<div className=''>
			<BrowserRouter>
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
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
