import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Loyout/Loyout';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import ErrorPage from '../ErrorPage/ErrorPage';
import Movies from '../Movies/Movies';
import { useState } from 'react';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/signin' element={<Login></Login>}></Route>
				<Route path='/signup' element={<Registration></Registration>}></Route>
				<Route path='/' element={<Layout />}>
					<Route index element={<Main></Main>}></Route>
					<Route path='/movies' element={<Movies></Movies>}></Route>
					<Route
						path='/saved-movies'
						element={<SavedMovies></SavedMovies>}
					></Route>
					<Route path='/profile' element={<Profile></Profile>}></Route>
				</Route>
				<Route path='/*' element={<ErrorPage></ErrorPage>}></Route>
			</Routes>
		</div>
	);
}

export default App;
