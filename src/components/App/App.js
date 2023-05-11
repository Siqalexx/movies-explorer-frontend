import Main from '../Main/Main';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from '../Loyout/Loyout';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import ErrorPage from '../ErrorPage/ErrorPage';
import Movies from '../Movies/Movies';
import { useEffect, useState } from 'react';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUser } from '../../utils/rootReducer';
import { api } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedEntrance from '../ProtectedEntrance/ProtectedEntrance.js';

function App() {
	const [errorText, setErrorText] = useState('');
	const history = useNavigate();
	const dispatch = useDispatch();
	function checkJWT() {
		const jwt = localStorage.getItem('jwt');

		//проверка есть ли jwt в локал storage, который записывается туда при авторизации
		if (jwt) {
			api
				.getUser()
				.then(data => {
					if (data) {
						//history('/movies');
						localStorage.setItem('jwt', 'cookie is download');
						dispatch(setUser({ email: data.email, name: data.name })); //Заносим данные о пользователе
					} else {
						history('/'); //если не авторизированы, то на главную
					}
				})
				.catch(err => console.log(err));
		}
	}
	useEffect(() => {
		checkJWT();
	}, []);

	function onSubmitLogin(email, password, setErrorText) {
		api
			.signIn(email, password)
			.then(data => {
				if (data) {
					api
						.getUser()
						.then(res => {
							localStorage.setItem('jwt', 'cookie is download'); //для проверки авторизации
							dispatch(setUser({ email: res.email, name: res.name }));
							history('/movies'); //переходим на страницу фильмов
						})
						.catch(err => {
							console.log(err);
							setErrorText(err);
							return err;
						});
				}
			})
			.catch(err => {
				console.log(err);
				setErrorText(err);
				return err;
			});
	}

	function onSubmitRegistration(email, password, name, setErrorText) {
		api
			.signUp(email, password, name)
			.then(data => {
				if (data) {
					onSubmitLogin(email, password, setErrorText);
				}
			})
			.catch(err => {
				setErrorText(err);
				console.log(err);
			});
	}
	function logoutUser() {
		api
			.logout()
			.then(res => {
				localStorage.removeItem('jwt');
				dispatch(removeUser());
			})
			.catch(err => console.log(err));
		localStorage.removeItem('isSearchInputSaved');
		localStorage.removeItem('isCheckboxMovieSaved');
		localStorage.removeItem('isSearchInput');
		localStorage.removeItem('isCheckboxMovie');
		localStorage.removeItem('isFilmsCountVisible');
	}

	return (
		<div className='App'>
			<Routes>
				<Route element={<ProtectedEntrance />}>
					<Route
						path='/signin'
						element={
							<Login
								onSubmitLogin={onSubmitLogin}
								errorText={errorText}
								setErrorText={setErrorText}
							/>
						}
					/>
					<Route
						path='/signup'
						element={
							<Registration
								onSubmitRegistration={onSubmitRegistration}
								errorText={errorText}
								setErrorText={setErrorText}
							/>
						}
					/>
				</Route>

				<Route path='/' element={<Layout />}>
					<Route index element={<Main />} />
					<Route element={<ProtectedRoute />}>
						<Route
							path='/profile'
							element={<Profile logoutUser={logoutUser} />}
						/>
						<Route path='/movies' element={<Movies />} />
						<Route path='/saved-movies' element={<SavedMovies />} />
					</Route>
				</Route>
				<Route path='/*' element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
