import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
	const jwt = localStorage.getItem('jwt');

	if (!jwt) {
		return <Navigate to='/' />;
	}
	return <Outlet />;
}

export default ProtectedRoute;
