import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile({ logoutUser }) {
	const user = useSelector(state => {
		return { email: state.user.email, name: state.user.name };
	});

	const [isName, setName] = useState(user.name);
	const [isEmail, setEmail] = useState(user.email);
	const [isEditState, setEditState] = useState(false);
	return (
		<section className='profile'>
			<h2 className='profile__title'>Привет, {user.name}!</h2>
			<div className='profile__container profile__container_border'>
				<p className='profile__container-name'>Имя</p>
				<input
					disabled={!isEditState}
					value={isName}
					onChange={e => {
						setName(e.target.value);
					}}
					className='profile__data'
				></input>
			</div>
			<div className='profile__container'>
				<p className='profile__container-name'>Почта</p>
				<input
					disabled={!isEditState}
					value={isEmail}
					onChange={e => {
						setEmail(e.target.value);
					}}
					className='profile__data'
				></input>
			</div>

			{isEditState ? (
				<div className='profile__edit-container '>
					<p className='profile__edit-error'>
						При обновлении профиля произошла ошибка.
					</p>
					<button className='profile__save-btn profile__save-btn_disabled'>
						Сохранить
					</button>
				</div>
			) : (
				<>
					<Link
						onClick={() => {
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
