import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.svg';

function Header() {
	const history = useNavigate();
	const location = useLocation();
	let state = location.pathname === '/' ? false : true;
	const [openBurger, setOpenBurger] = useState(false);
	return (
		<header className='header'>
			<img
				onClick={() => {
					history('/');
				}}
				src={Logo}
				className='header__logo'
				alt='Логотип'
			></img>
			{!state ? (
				<div className='header__menu'>
					<Link to='/signup' className='header__link'>
						Регистрация
					</Link>
					<button
						onClick={() => {
							history('/login');
						}}
						className='header__button'
					>
						Войти
					</button>
				</div>
			) : (
				<div>
					<button
						onClick={() => {
							setOpenBurger(!openBurger);
						}}
						className={`header__burger ${openBurger ? 'open' : ''}`}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<div className={`header__bg-burger ${openBurger ? 'open' : ''}`}>
						<div
							className={`header__links header__links_burger ${
								openBurger ? 'open' : ''
							}`}
						>
							<NavLink
								onClick={() => {
									setOpenBurger(false);
								}}
								to='/'
								className='header__src header__src_burger'
							>
								Главная
							</NavLink>

							<NavLink
								onClick={() => {
									setOpenBurger(false);
								}}
								to='/movies'
								className='header__src'
							>
								Фильмы
							</NavLink>
							<NavLink
								onClick={() => {
									setOpenBurger(false);
								}}
								to='/saved-movies'
								className='header__src'
							>
								Сохранённые фильмы
							</NavLink>
							<button
								onClick={() => {
									history('/profile');
									setOpenBurger(false);
								}}
								className='header__account'
							>
								Аккаунт
							</button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
