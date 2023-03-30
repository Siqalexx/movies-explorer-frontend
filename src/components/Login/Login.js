import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormIn from '../FormIn/FormIn';

function Login() {
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
			title='Рады видеть!'
			buttonName='Войти'
			children={
				<>
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
					Ещё не зарегистрированы?
					<span>
						<Link className='formIn__link' to='/signup'>
							Регистрация
						</Link>
					</span>
				</p>
			}
		></FormIn>
	);
}

export default Login;
