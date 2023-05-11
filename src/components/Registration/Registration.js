import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../utils/MainApi';
import FormIn from '../FormIn/FormIn';
import { isValid, useForm } from '../FormValidation/FormValidation';

function Registration({ onSubmitRegistration, errorText, setErrorText }) {
	const { values, handleChange, isButtonInactive, setButtonInactive } =
		useForm();

	const [isValidName, setValidName] = useState({
		invalid: true,
		errorText: '',
	});
	const [isValidEmail, setValidEmail] = useState({
		invalid: true,
		errorText: '',
	});
	const [isValidPassword, setValidPassword] = useState({
		invalid: true,
		errorText: '',
	});

	useEffect(() => {
		if (
			!isValidName.invalid &&
			!isValidEmail.invalid &&
			!isValidPassword.invalid
		) {
			setButtonInactive(false);
		} else setButtonInactive(true);
	}, [isValidEmail, isValidName, isValidPassword]);

	const submitRegistration = e => {
		e.preventDefault();
		setErrorText('');
		onSubmitRegistration(
			values['email'],
			values['password'],
			values['name'],
			setErrorText,
		);
	};

	useEffect(() => {
		setButtonInactive(true);
	}, [errorText, setButtonInactive]);

	const validateEmail = e => {
		return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
			e.target.value,
		);
	};
	const validateNamePsw = e => {
		if (e.target.validity.valid) {
			return true;
		}
		return false;
	};
	return (
		<FormIn
			title='Добро пожаловать!'
			buttonName='Зарегистрироваться'
			buttonInnactive={isButtonInactive}
			onSubmit={submitRegistration}
			errorText={errorText}
			children={
				<>
					<div className='formIn__email-block'>
						<p className='formIn__input-text'>Имя</p>
						<input
							name='name'
							value={values['name'] || ''}
							className={`formIn__email ${
								isValidName.invalid ? 'formIn__input-error' : ''
							}`}
							onChange={e => {
								handleChange(e);
								isValid(e, setValidName, validateNamePsw);
							}}
							type='text'
							minLength='2'
							required
						></input>
						<span className='formIn__input-message'>
							{isValidName.errorText}
						</span>
					</div>
					<div className='formIn__email-block'>
						<p className='formIn__input-text'>E-mail</p>
						<input
							name='email'
							value={values['email'] || ''}
							className={`formIn__email ${
								isValidEmail.invalid ? 'formIn__input-error' : ''
							}`}
							onChange={e => {
								handleChange(e);
								isValid(e, setValidEmail, validateEmail);
							}}
							type='email'
							required
						></input>
						<span className='formIn__input-message'>
							{isValidEmail.errorText}
						</span>
					</div>
					<div className='formIn__password-block'>
						<p className='formIn__input-text'>Пароль</p>
						<input
							name='password'
							minLength='2'
							maxLength='200'
							value={values['password'] || ''}
							className={`formIn__password ${
								isValidPassword.invalid ? 'formIn__input-error' : ''
							}`}
							onChange={e => {
								handleChange(e);
								isValid(e, setValidPassword, validateNamePsw);
							}}
							type='password'
							required
						></input>
						<span className='formIn__input-message'>
							{isValidPassword.errorText}
						</span>
					</div>
				</>
			}
			underButton={
				<p className='formIn__under-button'>
					Уже зарегистрированы?
					<span>
						<Link
							onClick={() => {
								setErrorText('');
							}}
							className='formIn__link'
							to='/signin'
						>
							Войти
						</Link>
					</span>
				</p>
			}
		></FormIn>
	);
}

export default Registration;
