import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	let auth = true;
	if (!auth) {
		return <Navigate to={"/"} />;
	}
	return children;
};

export default ProtectedRoute;
