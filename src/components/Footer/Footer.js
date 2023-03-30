import { useLocation } from 'react-router-dom';

function Footer() {
	const location = useLocation();

	return (
		<>
			{location.pathname !== '/profile' && (
				<footer className='footer'>
					<div className='footer__title'>
						Учебный проект Яндекс.Практикум х BeatFilm.
					</div>

					<div className='footer__info'>
						<p className='footer__year'>© 2023</p>
						<div className='footer__links'>
							<a
								rel='noreferrer'
								target='_blank'
								href='https://practicum.yandex.ru/'
								className='footer__link'
							>
								Яндекс.Практикум
							</a>

							<a
								target='_blank'
								rel='noreferrer'
								href='https://github.com/'
								className='footer__link'
							>
								Github
							</a>
						</div>
					</div>
				</footer>
			)}
		</>
	);
}

export default Footer;
