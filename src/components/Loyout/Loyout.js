import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
function Layout({ header }) {
	return (
		<>
			<Header header={header} />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
