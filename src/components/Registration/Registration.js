import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormIn from '../FormIn/FormIn';

function Registration() {
	const [isName, setName] = useState('');
	const [isValidName, setValidName] = useState({
		invalid: true,
		errorText: '',
	});

	const [isEmail, setEmail] = useState('');
	const [isValidEmail, setValidEmail] = useState({
		invalid: true,
		errorText: '',
	});

	const [isPassword, setPassword] = useState('');
	const [isValidPassword, setValidPassword] = useState({
		invalid: true,
		errorText: '',
	});

	function isValid(e, setValid) {
		if (e.target.validity.valid) {
			setValid({
				invalid: false,
				errorText: '',
			});
		} else {
			setValid({
				invalid: true,
				errorText: e.target.validationMessage,
			});
		}
	}
	return (
		<FormIn
			title='Добро пожаловать!'
			buttonName='Зарегистрироваться'
			children={
				<>
					<div className='formIn__email-block'>
						<p className='formIn__input-text'>Имя</p>
						<input
							value={isName}
							className={`formIn__email ${
								isValidName.invalid ? 'formIn__input-error' : ''
							}`}
							onChange={e => {
								setName(e.target.value);
								isValid(e, setValidName);
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
							value={isEmail}
							className={`formIn__email ${
								isValidEmail.invalid ? 'formIn__input-error' : ''
							}`}
							onChange={e => {
								setEmail(e.target.value);
								isValid(e, setValidEmail);
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
							minLength='2'
							maxLength='200'
							value={isPassword}
							className={`formIn__password ${
								isValidPassword.invalid ? 'formIn__input-error' : ''
							}`}
							onChange={e => {
								setPassword(e.target.value);
								isValid(e, setValidPassword);
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
						<Link className='formIn__link' to='/signin'>
							Войти
						</Link>
					</span>
				</p>
			}
		></FormIn>
	);
}

export default Registration;
