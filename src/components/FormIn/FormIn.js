import { useState } from 'react';
import logo from '../../images/logo.svg';
function FormIn({
	children,
	title,
	underButton,
	buttonName,
	buttonInnactive,
	onSubmit,
}) {
	return (
		<section className='formIn'>
			<img className='formIn__logo' alt='Логотип' src={logo}></img>
			<h2 className='formIn__title'>{title}</h2>
			<form onSubmit={onSubmit} className='formIn__form' noValidate>
				{children}
				<button
					disabled={buttonInnactive ? true : false}
					className={`formIn__submit ${
						buttonInnactive ? 'formIn__submit_disabled' : ''
					}`}
					type='submit'
				>
					{buttonName}
				</button>
			</form>
			{underButton}
		</section>
	);
}

export default FormIn;
