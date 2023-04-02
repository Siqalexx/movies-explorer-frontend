import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
	const userObject = useSelector(state => state.user);
	if (Object.entries(userObject).length === 0) {
		return <Navigate to='/' />;
	}
	return <Outlet />;
}

export default ProtectedRoute;
