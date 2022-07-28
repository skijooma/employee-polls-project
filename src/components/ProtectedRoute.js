import { Navigate } from "react-router";
import "../App.css";


const ProtectedRoute = ({ user, redirectTo = "/login", children }) => {

	console.log("PROTECTED ROUTE (AUTHED USER) ==> ", user);

	if (!user) {

		return <Navigate to = {redirectTo} replace/>;
	}

	return children;
};

export default ProtectedRoute;
