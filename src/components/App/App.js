import Footer from '../Footer/Footer';
import Header from '../Header/Header';
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
import { apiMovie } from '../../utils/MoviesApi';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUser } from '../../utils/rootReducer';
import { api } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	// useEffect(() => {
	// 	apiMovie.getFilms().then(data => {});
	// }, []);
	const history = useNavigate();
	// const count = useSelector(state => state.user.email);
	const dispatch = useDispatch();

	useEffect(() => {
		const jwt = localStorage.getItem('jwt');
		//проверка есть ли jwt в локал storage, который записывается туда при авторизации
		if (jwt) {
			api
				.getUser()
				.then(data => {
					if (data) {
						history('/movies');
						localStorage.setItem('jwt', 'cookie is download');
						setLoggedIn(true); //входим
						dispatch(setUser({ email: data.email, name: data.name })); //Заносим данные о пользователе
					} else {
						history('/'); //если не авторизированы, то на главную
					}
				})
				.catch(err => console.log(err));
		}
	}, []);

	function onSubmitLogin(email, password) {
		api
			.signIn(email, password)
			.then(data => {
				if (data) {
					console.log(3);
					api
						.getUser()
						.then(res => {
							localStorage.setItem('jwt', 'cookie is download'); //для проверки авторизации
							setLoggedIn(true);
							dispatch(setUser({ email: res.email, name: res.name }));
							history('/movies'); //переходим на страницу фильмов
						})
						.catch(err => console.log(err));
				}
			})
			.catch(err => console.log(err));
	}

	function onSubmitRegistration(email, password, name) {
		api
			.signUp(email, password, name)
			.then(data => {
				if (data) {
					onSubmitLogin(email, password);
				}
			})
			.catch(err => console.log(err));
	}
	function logoutUser() {
		api
			.logout()
			.then(res => {
				localStorage.removeItem('jwt');
				setLoggedIn(false);
				dispatch(removeUser());
			})
			.catch(err => console.log(err));
	}

	return (
		<div className='App'>
			{/* <button
				style={{ zIndex: 50, width: '500px' }}
				onClick={() => {
					// dispatch(setUser({ email: 'lal', name: 'name' }));
					dispatch(removeUser());
				}}
				проверка работы редакс туллкита
			>
				INCREMENT {count}
			</button> */}
			<Routes>
				<Route
					path='/signin'
					element={<Login onSubmitLogin={onSubmitLogin} />}
				></Route>
				<Route
					path='/signup'
					element={<Registration onSubmitRegistration={onSubmitRegistration} />}
				></Route>
				<Route path='/' element={<Layout />}>
					<Route index element={<Main></Main>}></Route>
					<Route element={<ProtectedRoute loggedIn={loggedIn} />}>
						<Route
							path='/profile'
							element={<Profile logoutUser={logoutUser} />}
						></Route>
						<Route path='/movies' element={<Movies></Movies>}></Route>
						<Route
							path='/saved-movies'
							element={<SavedMovies></SavedMovies>}
						></Route>
					</Route>
				</Route>
				<Route path='/*' element={<ErrorPage></ErrorPage>}></Route>
			</Routes>
		</div>
	);
}

export default App;
