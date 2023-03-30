function Portfolio() {
	return (
		<div className='portfolio'>
			<h4 className='portfolio__title'>Портфолио</h4>
			<ul className='portfolio__links'>
				<li className='portfolio__link'>
					<a
						className='portfolio__src'
						rel='noreferrer'
						target='_blank'
						href='https://github.com/Siqalexx'
					>
						<h3 className='portfolio__text'>Статичный сайт</h3>
						<div className='portfolio__icon'></div>
					</a>
				</li>
				<li className='portfolio__link'>
					<a
						className='portfolio__src'
						rel='noreferrer'
						target='_blank'
						href='https://github.com/Siqalexx'
					>
						<h3 className='portfolio__text'>Адаптивный сайт</h3>
						<div className='portfolio__icon'></div>
					</a>
				</li>
				<li className='portfolio__link'>
					<a
						className='portfolio__src'
						rel='noreferrer'
						target='_blank'
						href='https://github.com/Siqalexx'
					>
						<h3 className='portfolio__text'>Одностраничное приложение</h3>
						<div className='portfolio__icon'></div>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Portfolio;
