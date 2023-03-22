import { Link, useNavigate } from 'react-router-dom';

function ErrorPage() {
	const history = useNavigate();
	return (
		<section className='errorPage'>
			<h2 className='errorPage__title'>404</h2>
			<p className='errorPage__subtitle'>Страница не найдена</p>
			<Link
				className='errorPage__link'
				onClick={() => {
					history(-1);
				}}
			>
				Назад
			</Link>
		</section>
	);
}

export default ErrorPage;
