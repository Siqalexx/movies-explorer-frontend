import { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
	const name = 'alex';
	const email = 'pochta@yandex.ru';
	const [isName, setName] = useState(name);
	const [isEmail, setEmail] = useState(email);
	const [isEditState, setEditState] = useState(false);
	return (
		<section className='profile'>
			<h2 className='profile__title'>Привет, Виталий!</h2>
			<div className='profile__container profile__container_border'>
				<p className='profile__container-name'>Имя</p>
				<input
					disabled={!isEditState}
					value={isName}
					onChange={e => {
						console.log(1);
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
						console.log(1);
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
					<Link to='/login' className='profile__link profile__link_signout'>
						Выйти из аккаунта
					</Link>
				</>
			)}
		</section>
	);
}

export default Profile;
