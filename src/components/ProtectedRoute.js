import { Navigate, useLocation } from "react-router";
import "../App.css";


const ProtectedRoute = ({ user, redirectTo = "/login", children }) => {

	const location = useLocation();

	if (!user) {

		return <Navigate to = {redirectTo} state = {{ path: location.pathname }} replace/>;
	}

	return children;
};

export default ProtectedRoute;
