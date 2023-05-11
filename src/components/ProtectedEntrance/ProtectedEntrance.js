import { Navigate, Outlet } from 'react-router-dom';

function ProtectedEntrance() {
	const jwt = localStorage.getItem('jwt');

	if (jwt) {
		return <Navigate to='/' />;
	}
	return <Outlet />;
}

export default ProtectedEntrance;
