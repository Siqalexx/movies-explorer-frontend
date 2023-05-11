import { useState } from 'react';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';
function FormIn({
	children,
	title,
	underButton,
	buttonName,
	buttonInnactive,
	onSubmit,
	setButtonInactive,
	errorText,
}) {
	const history = useNavigate();
	let errorTrancription = '';
	if (errorText.split(' ')[1] === '401') {
		errorTrancription = 'Неправильный логин или пароль';
	} else if (errorText.split(' ')[1] === '409') {
		errorTrancription = 'Пользователь с таким email уже существует';
	} else if (errorText.split(' ')[1]) {
		errorTrancription = 'Ошибка! Попробуйте еще раз.';
	}
	return (
		<section className='formIn'>
			<img
				className='formIn__logo'
				onClick={() => {
					history('/');
				}}
				alt='Логотип'
				src={logo}
			></img>
			<h2 className='formIn__title'>{title}</h2>
			<form onSubmit={onSubmit} className='formIn__form' noValidate>
				{children}
				<div>
					<p
						style={{
							fontFamily: 'Inter, Arial, Helvetica, sans-serif',
							fontStyle: 'normal',
							fontWeight: '400',
							fontSize: '11px',
							textAlign: 'center',
							color: '#ff004c',
						}}
					>
						{errorTrancription}
					</p>
					<button
						disabled={buttonInnactive ? true : false}
						className={`formIn__submit ${
							buttonInnactive ? 'formIn__submit_disabled' : ''
						}`}
						type='submit'
					>
						{buttonName}
					</button>
				</div>
			</form>
			{underButton}
		</section>
	);
}

export default FormIn;
