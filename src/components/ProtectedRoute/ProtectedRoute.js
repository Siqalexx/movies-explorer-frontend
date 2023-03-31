import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ loggedIn }) {
	if (!loggedIn) {
		return <Navigate to='/' />;
	}
	return <Outlet />;
}

export default ProtectedRoute;
