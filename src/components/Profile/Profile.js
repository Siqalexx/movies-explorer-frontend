import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { api } from '../../utils/MainApi';
import { setUser } from '../../utils/rootReducer';
import { isValid } from '../FormValidation/FormValidation';

function Profile({ logoutUser }) {
	const user = useSelector(state => {
		return { email: state.user.email, name: state.user.name };
	});

	const dispatch = useDispatch();
	const [isName, setName] = useState(user.name);
	const [isEmail, setEmail] = useState(user.email);
	const [isValidName, setValidName] = useState(false);
	const [isValidEmail, setValidEmail] = useState(false);
	const [isEditState, setEditState] = useState(false);
	const [isButtonInactive, setButtonInnactive] = useState(true);
	const [errorText, setErrorText] = useState('');

	useEffect(() => {
		if (!isValidName && !isValidEmail) {
			setButtonInnactive(true);
		} else setButtonInnactive(false);
	}, [isName, isEmail]);

	function isValid(e, setValid, checkValid) {
		if (checkValid(e)) {
			setValid(true);
		} else {
			setValid(false);
		}
	}

	const validateNamePsw = e => {
		if (e.target.validity.valid) {
			return true;
		}
		return false;
	};

	const validateEmail = e => {
		return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
			e.target.value,
		);
	};
	return (
		<section className='profile'>
			<h2 className='profile__title'>Привет, {user.name}!</h2>

			<div className='profile__container profile__container_border'>
				<p className='profile__container-name'>Имя</p>

				<input
					required
					minLength='2'
					disabled={!isEditState}
					value={isName}
					type='text'
					onChange={e => {
						setName(e.target.value);
						isValid(e, setValidName, validateNamePsw);
					}}
					className='profile__data'
				></input>
			</div>
			<div className='profile__container'>
				<p className='profile__container-name'>Почта</p>
				<input
					required
					disabled={!isEditState}
					value={isEmail}
					type='email'
					onChange={e => {
						setEmail(e.target.value);
						isValid(e, setValidEmail, validateEmail);
					}}
					className='profile__data'
				></input>
			</div>

			{isEditState ? (
				<div className='profile__edit-container '>
					<p className='profile__edit-error'>{errorText}</p>
					<button
						disabled={isButtonInactive ? true : false}
						onClick={() => {
							if (isName !== user.name || isEmail !== user.email) {
								api
									.changeInfoProfile(isEmail, isName)
									.then(data => {
										dispatch(setUser({ email: data.email, name: data.name }));
										setButtonInnactive(true);
										setEditState(false);
									})
									.catch(err => {
										if (err.split(' ')[1] === '409') {
											setButtonInnactive(true);
											return setErrorText(
												'Пользователь с таким email уже существует.',
											);
										}
										setButtonInnactive(true);
										return setErrorText(
											'При обновлении профиля произошла ошибка.',
										);
									});
							} else {
								setButtonInnactive(true);
							}
						}}
						className={`profile__save-btn ${
							isButtonInactive ? 'profile__save-btn_disabled' : ''
						}`}
					>
						Сохранить
					</button>
				</div>
			) : (
				<>
					<Link
						onClick={() => {
							setErrorText('');
							setEditState(true);
						}}
						className='profile__link'
					>
						Редактировать
					</Link>
					<Link
						to='/'
						onClick={logoutUser}
						className='profile__link profile__link_signout'
					>
						Выйти из аккаунта
					</Link>
				</>
			)}
		</section>
	);
}

export default Profile;
