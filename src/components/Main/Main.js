import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

function Main() {
	return (
		<main className='main'>
			<Promo></Promo>
			<AboutProject />
			<Techs />
			<AboutMe />
		</main>
	);
}

export default Main;
