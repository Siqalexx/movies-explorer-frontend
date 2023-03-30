import AboutMePhoto from '../../images/aboutMe-photo.png';
import Portfolio from '../Portfolio/Portfolio';
function AboutMe() {
	return (
		<section id='aboutMe' className='aboutMe'>
			<h3 className='aboutMe__toc'>Студент</h3>
			<div className='aboutMe__resume'>
				<div className='aboutMe__info'>
					<h2 className='aboutMe__title'>Александр</h2>
					<p className='aboutMe__subtitle'>Фронтенд-разработчик, 20 лет</p>
					<p className='aboutMe__description'>
						Я родился и живу в Симферополе, учусь в КФУ им. Вернадского на
						направлении "Программная инженерия". Я люблю заниматься спортом и
						проводить свободное от учебы время с друзьями. Не так давно открыл
						для себя фронтенд разработку и мне это понравилось. После того, как
						прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
						ушёл с постоянной работы.
					</p>
					<p className='aboutMe__annot'>Github</p>
				</div>
				<img src={AboutMePhoto} alt='Мое фото' className='aboutMe__photo'></img>
			</div>
			<Portfolio />
		</section>
	);
}

export default AboutMe;
