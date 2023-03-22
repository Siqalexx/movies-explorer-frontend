import logo from '../../images/logo.svg';
function FormIn({ children, title, underButton, buttonName }) {
	return (
		<section className='formIn'>
			<img className='formIn__logo' src={logo}></img>
			<h2 className='formIn__title'>{title}</h2>
			<form className='formIn__form' noValidate>
				{children}
				<button className='formIn__submit' type='submit'>
					{buttonName}
				</button>
			</form>
			{underButton}
		</section>
	);
}

export default FormIn;
